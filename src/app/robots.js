import { getBaseUrl } from "@/lib/baseUrl";

export default function robots() {
    const base = getBaseUrl();

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                ],
            },
        ],
        sitemap: `${base}/sitemap.xml`,
        host: base,
    };
}
