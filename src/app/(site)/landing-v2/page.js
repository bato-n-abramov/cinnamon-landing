import Hero from "@/components/sections/hero/Hero";
import BarrierAccessV2 from "@/components/sections/barrier-accessV2/BarrierAccessV2";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import EfficiencyScaleV2 from "@/components/sections/efficiency-scaleV2/EfficiencyScaleV2";
import ComplianceV2 from "@/components/sections/complianceV2/ComplianceV2";
import RequestDemoV2 from "@/components/sections/request-demoV2/RequestDemoV2";
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


export default function Page() {

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
            <BarrierAccessV2 />
            <HowItWorks tag={true} />
            <EfficiencyScaleV2 />
            <ComplianceV2 />
            <RequestDemoV2 />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(orgLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(siteLd)} />
        </main>
    );
}
