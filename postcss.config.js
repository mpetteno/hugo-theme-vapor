module.exports = {
    plugins: {
        "postcss-import": {
            "path": "./assets/css/"
        },
        tailwindcss: {},
        'tailwindcss/nesting': {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
}

