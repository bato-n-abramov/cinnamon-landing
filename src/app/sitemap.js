import { getBaseUrl } from "@/lib/baseUrl";

export default async function sitemap() {
    const base = getBaseUrl();
    const now = new Date();

    const routes = [
        "/",
        "/sign-up"
    ];

    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1.0 : 0.7,
    }));
}
