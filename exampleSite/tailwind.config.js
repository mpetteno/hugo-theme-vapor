const themeDir = "../"
const defaultConfig = require(themeDir + 'tailwind.config');

module.exports = {
    ...defaultConfig,
    content: [
        ...defaultConfig.content,
        themeDir + 'layouts/**/*.html'
    ]
};