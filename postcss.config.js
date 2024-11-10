module.exports = {
    plugins: {
        "postcss-import": {
            "path":  + "./assets/css/"
        },
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
}

