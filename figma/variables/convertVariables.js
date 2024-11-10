const fs = require("fs");
const _ = require("lodash");

// Load the exported variables from Figma
const PRIMITIVE_COLORS = require("./export/primitive-colors.json");
const SEMANTIC_COLORS = require("./export/semantic-colors.json");
const PRIMITIVE_TYPE = require("./export/primitive-type.json");
const SPACING = require("./export/spacing.json");
const BORDER = require("./export/border.json");
const LAYOUT = require("./export/layout.json");

const processedData = {
    theme: {}
};

// Process primitive colors
const PRIMITIVE_COLORS_KEY = "colors"
if (PRIMITIVE_COLORS) {
    // Initialize colors object with default values
    processedData.theme[PRIMITIVE_COLORS_KEY] = {
        transparent: 'transparent',
        current: 'currentColor',
    };
    // Iterate over all categories in data.body dynamically
    Object.entries(PRIMITIVE_COLORS).forEach(([category, shades]) => {
        const categoryKey = category.toLowerCase();
        processedData.theme[PRIMITIVE_COLORS_KEY][categoryKey] = {};
        // Process each shade within the category
        Object.entries(shades).forEach(([shade, colorObj]) => {
            const shadeKey = shade.toLowerCase().replace(" ", "-");
            processedData.theme[PRIMITIVE_COLORS_KEY][categoryKey][shadeKey] = colorObj["$value"];
        });
    });

    // Process semantic colors
    if (SEMANTIC_COLORS) {
        // Initialize colors object with default values
        // Iterate over all categories in data.body dynamically
        Object.entries(SEMANTIC_COLORS).forEach(([collectionName, categories]) => {
            if (collectionName !== "Surface" && collectionName !== "Overlay") {
                collectionName = (collectionName === 'Content' ? 'Text' : collectionName);
                const collectionKey = collectionName.toLowerCase() + "Color";
                processedData.theme[collectionKey] = {};
                // Process each shade within the category
                Object.entries(categories).forEach(([category, modes]) => {
                    const categoryKey = category.toLowerCase().replace(" ", "-");
                    Object.entries(modes).forEach(([mode, colorObj]) => {
                        const modeKey = mode.toLowerCase().replace(" ", "-");
                        let primitiveColor = colorObj["$value"].replace("{", "").replace("}", "");
                        let primitiveColorName = primitiveColor.split(".")[0].toLowerCase();
                        let primitiveColorShade = primitiveColor.split(".")[1].toLowerCase();
                        processedData.theme[collectionKey][categoryKey + "-" + modeKey] = processedData.theme[PRIMITIVE_COLORS_KEY][primitiveColorName][primitiveColorShade];
                    });
                });
            }
        });
    }
}

// Process spacing
const SPACING_KEY = "spacing"
if (SPACING) {
    processedData.theme[SPACING_KEY] = {};
    Object.entries(SPACING["Space"])
        .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
        .forEach(([key, value]) => {
            processedData.theme[SPACING_KEY][key.toLowerCase().replace(",", ".")] = `${value["$value"]}px`;
        });
}

// Process border
const BORDER_KEY = "border"
if (BORDER) {
    Object.entries(BORDER).forEach((category) => {
        const collectionKey = BORDER_KEY + category[0];
        processedData.theme[collectionKey] = {};
        Object.entries(category[1])
            .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
            .forEach(([category, value]) => {
                const categoryKey = category.toLowerCase().replace(" ", "-");
                processedData.theme[collectionKey][categoryKey] = `${value["$value"]}px`;
            });
    });
}

// Process layout
const LAYOUT_KEY = "screens"
if (LAYOUT) {
    Object.entries(LAYOUT).forEach((category) => {
        processedData.theme[LAYOUT_KEY] = {};
        Object.entries(category[1])
            .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
            .forEach(([key, value]) => {
                const categoryKey = key.toLowerCase().replace(" ", "-");
                processedData.theme[LAYOUT_KEY][categoryKey] = `${value["$value"]}px`;
            });
    });
}

// Process typography
if (PRIMITIVE_TYPE) {
    Object.entries(PRIMITIVE_TYPE).forEach((category) => {
        let key = category[0].toLowerCase()
            .replace(/ (\w)/g, (_, letter) => letter.toUpperCase());
        processedData.theme[key] = {}
        Object.entries(category[1]).forEach((size) => {
            processedData.theme[key][size[0].toLowerCase()] = `${size[1]["$value"]}px`;
        });
    });
}

fs.writeFileSync(
    __dirname + "/generatedTailwindConfig.js",
    "module.exports = " + JSON.stringify(processedData, null, 2),
    "utf-8",
);
console.log(
    "Processing completed successfully. Output written to 'variableOutput.js'.",
);