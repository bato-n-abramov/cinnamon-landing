export function jsonLd(data) {
    return { __html: JSON.stringify(data) };
}
