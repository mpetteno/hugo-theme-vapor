module.exports = {
    plugins: {
        "postcss-import": {
            "path":  + "./assets/css/"
        },
        tailwindcss: {},
        autoprefixer: {},
        ...process.env.HUGO_ENVIRONMENT === "production" && {
            "@fullhuman/postcss-purgecss": {
                "content": ["./hugo_stats.json"],
                "defaultExtractor": (content) => {
                    const els = JSON.parse(content).htmlElements;
                    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
                },
                "safelist": {
                    standard: [/^dark/]
                }
            }
        }
    }
}
