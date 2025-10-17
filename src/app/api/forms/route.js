import { Resend } from "resend";
import sgMail from "@sendgrid/mail";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
if (process.env.SENDGRID_API_KEY) sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const json = (data, init = {}) =>
    new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
        ...init,
    });

const FORMS = {
    "request-demo": {
        required: ["firstName", "lastName", "email", "phone", "org", "title", "specialty", "ehr"],
        subject: (p) => `Request a Demo: ${[p.firstName, p.lastName].filter(Boolean).join(" ") || "No name"}`,
        to: process.env.CONTACT_TO,
    },
    "sign-up": {
        required: ["firstName", "lastName", "email"],
        subject: (p) => `Sign Up: ${[p.firstName, p.lastName].filter(Boolean).join(" ") || "No name"}`,
        to: process.env.SIGNUP_TO || process.env.CONTACT_TO,
    },
};

const esc = (s = "") =>
    String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
const br = (s = "") => String(s).replace(/\n/g, "<br/>");
const label = (k = "") =>
    k
        .replace(/_/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/^./, (m) => m.toUpperCase());

function normalizeRecipients(input) {
    if (!input) return [];
    if (Array.isArray(input)) return input.filter(Boolean);
    return String(input)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
}

async function sendViaSendGrid({ from, to, replyTo, subject, text, html }) {
    const msg = { from, to, subject, text, html };
    if (replyTo) msg.replyTo = replyTo;
    await sgMail.send(msg);
}

async function sendViaResend({ from, to, replyTo, subject, text, html }) {
    const { error } = await resend.emails.send({
        from,
        to,
        subject,
        text,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
    });
    if (error) {
        const err = new Error("Resend send failed");
        err.cause = error;
        throw err;
    }
}

async function deliverEmail({ from, to, replyTo, subject, text, html }) {
    if (process.env.SENDGRID_API_KEY) {
        try {
            await sendViaSendGrid({ from, to, replyTo, subject, text, html });
            return;
        } catch (e) {
            console.error("[SendGrid] failed:", e);
        }
    }

    if (process.env.RESEND_API_KEY) {
        try {
            await sendViaResend({ from, to, replyTo, subject, text, html });
            return;
        } catch (e) {
            console.error("[Resend] failed:", e);
        }
    }

    throw new Error("No email provider configured or all failed");
}

export async function POST(req) {
    try {
        const body = await req.json();
        const cfg = FORMS[body?.form];
        if (!cfg) return json({ error: "Unknown form" }, { status: 400 });

        let payload = body?.payload ?? {};
        if (typeof payload === "string") {
            try {
                payload = JSON.parse(payload);
            } catch {
                return json({ error: "Bad payload" }, { status: 400 });
            }
        }

        const miss = cfg.required.filter((k) => !payload?.[k] || String(payload[k]).trim() === "");
        if (miss.length) return json({ error: `Missing: ${miss.join(", ")}` }, { status: 400 });

        if (!process.env.CONTACT_FROM) return json({ error: "CONTACT_FROM missing" }, { status: 500 });
        if (!cfg.to) return json({ error: "Recipient missing (CONTACT_TO/SIGNUP_TO)" }, { status: 500 });

        const keys = Array.from(new Set([...cfg.required, ...Object.keys(payload).sort()]));
        const rows = keys
            .map(
                (k) =>
                    `<tr><td><strong>${esc(label(k))}</strong></td><td>${br(esc(String(payload[k] ?? ""))) || "(not provided)"
                    }</td></tr>`
            )
            .join("");
        const html = `<div style="font-family:Arial,sans-serif;font-size:14px"><table cellpadding="6" style="border-collapse:collapse">${rows}</table></div>`;
        const text = keys.map((k) => `${label(k)}: ${String(payload[k] ?? "")}`).join("\n");
        const subject = cfg.subject(payload);

        const recipients = normalizeRecipients(cfg.to);
        if (!recipients.length) return json({ error: "Recipient list empty" }, { status: 500 });

        await deliverEmail({
            from: process.env.CONTACT_FROM,
            to: recipients,
            replyTo: payload.email || undefined,
            subject,
            text,
            html,
        });

        return json({ ok: true });
    } catch (e) {
        console.error("[forms POST] error:", e);
        return json({ error: "Server error", details: e?.message || String(e) }, { status: 500 });
    }
}
