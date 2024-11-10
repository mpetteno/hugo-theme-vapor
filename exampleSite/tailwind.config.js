const themeDir = "../"
const defaultConfig = require(themeDir + 'tailwind.config');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    ...defaultConfig,
    content: [
        ...defaultConfig.content,
        themeDir + 'layouts/**/*.html'
    ],
    theme: {
        ...defaultConfig.theme,
        fontFamily: {
            'sans': ['"Roboto"', ...defaultTheme.fontFamily.sans]
        }
    }
};