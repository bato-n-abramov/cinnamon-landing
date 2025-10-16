import styles from "./SignUpV2.module.scss";
import SignUpClientV2 from "./SignUpClientV2";
import { getBaseUrl } from "@/lib/baseUrl";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/sign-up-v2";
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

    return (
        <main className={styles.SignUpMain}>
            <SignUpClientV2 />
        </main>

    );
}

