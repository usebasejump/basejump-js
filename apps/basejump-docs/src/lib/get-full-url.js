export default function getFullUrl(path) {
    if (path.startsWith("http")) return path;
    const baseUrl =
        process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || window.location.origin;
    return [baseUrl, path?.replace(/^\//, "")].filter(Boolean).join("/");
}