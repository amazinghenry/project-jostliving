export function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}
