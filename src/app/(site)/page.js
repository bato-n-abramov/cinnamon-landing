import Hero from "@/components/sections/hero/Hero";
import BarrierAccess from "@/components/sections/barrier-access/BarrierAccess";
import PriorAuthorization from "@/components/sections/prior-authorization/PriorAuthorization";
import FinancialAssistance from "@/components/sections/financial-assistance/FinancialAssistance";
import SustainedAdherence from "@/components/sections/sustained-adherence/SustainedAdherence";
import RequestDemo from "@/components/sections/request-demo/RequestDemo";
import { getBaseUrl } from "@/lib/baseUrl";
import { jsonLd } from "@/lib/jsonLd";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/";
    const url = `${base}${path}`;

    const title = "Cinnamon — One platform. One partner. Zero cost";
    const description =
        "Cinnamon aligns health systems, patients, and manufacturers to streamline prior authorization, unlock patient assistance, and accelerate adherence.";

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
            images: [{ url: ogImage, width: 1200, height: 630, alt: "Cinnamon" }],
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

export default function Home() {

    const base = getBaseUrl();

    const orgLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Cinnamon",
        url: base,
        logo: `${base}/og/default.jpg`,
        sameAs: [
            "https://www.linkedin.com/company/cinnamon-%E2%9F%A8%E2%84%A2%E2%9F%A9/"

        ],
    };

    const siteLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: base,
        name: "Cinnamon",
        potentialAction: {
            "@type": "SearchAction",
            target: `${base}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <main>
            <Hero />
            <BarrierAccess />
            <PriorAuthorization />
            <FinancialAssistance />
            <SustainedAdherence />
            <RequestDemo />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(orgLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(siteLd)} />
        </main>
    );
}