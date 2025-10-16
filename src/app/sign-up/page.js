import SignUpClient from "./SignUpClient";
import { getBaseUrl } from "@/lib/baseUrl";
import styles from "./SignUp.module.scss";
import { jsonLd } from "@/lib/jsonLd";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/sign-up";
    const url = `${base}${path}`;

    const title = "Sign Up — Cinnamon";
    const description =
        "Connect with Cinnamon to explore how we can help improve efficiency, reduce costs, and deliver better outcomes for patients.";

    const ogImage = "/og/default.jpg";

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            url,
            siteName: "Cinnamon",
            title,
            description,
            images: [{ url: ogImage, width: 1200, height: 630, alt: "Sign Up — Cinnamon" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        robots: { index: true, follow: true },
    };
}

export default function SignUpPage() {

    const base = getBaseUrl();
    const url = `${base}/sign-up`;

    const webPageLd = {
        "@context": "https://schema.org",
        "@type": "SignUpPage",
        name: "Sign Up",
        url,
        description:
            "Connect with Cinnamon to explore how we can help improve efficiency, reduce costs, and deliver better outcomes for patients.",
        isPartOf: { "@type": "WebSite", url: base, name: "Cinnamon" },
    };

    return (
        <main className={styles.SignUpMain}>
            <SignUpClient />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(webPageLd)} />
        </main>
    );
}

