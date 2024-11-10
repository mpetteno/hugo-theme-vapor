const themeDir = "../"
const defaultConfig = require(themeDir + 'tailwind.config');

module.exports = {
    ...defaultConfig,
    content: [
        ...defaultConfig.content,
        '../layouts/**/*.html'
    ]
};