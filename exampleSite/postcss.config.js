const themeDir = "../"
const defaultConfig = require(themeDir + 'postcss.config');

module.exports = {
    ...defaultConfig,
    plugins: {
        ...defaultConfig.plugins,
        "postcss-import": {
            "path": themeDir + "assets/css/"
        }
    }
}
