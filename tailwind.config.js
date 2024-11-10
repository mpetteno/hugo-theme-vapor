/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'selector',
  plugins: [],
  "theme": {
    "colors": {
      "transparent": "transparent",
      "current": "currentColor",
      "base": {
        "black": "#000000",
        "black-50": "rgba(0, 0, 0, 0.5000)",
        "white": "#ffffff",
        "white-50": "rgba(255, 255, 255, 0.5000)"
      },
      "brand": {
        "50": "#fcf5f4",
        "100": "#fae9e9",
        "200": "#f4d7d7",
        "300": "#ecb5b6",
        "400": "#e08c8f",
        "500": "#d06369",
        "600": "#bb4351",
        "700": "#a93847",
        "800": "#832e3c",
        "900": "#712a38",
        "950": "#3e131a"
      },
      "neutral": {
        "50": "#f6f5f6",
        "100": "#e7e6e7",
        "200": "#d1d0d1",
        "300": "#b0afb1",
        "400": "#888789",
        "500": "#6f6b6f",
        "600": "#5d5c5e",
        "700": "#4f4e50",
        "800": "#464446",
        "900": "#363536",
        "950": "#262626"
      },
      "secondary": {
        "50": "#f1faf9",
        "100": "#daf2f3",
        "200": "#bae5e7",
        "300": "#8bd2d5",
        "400": "#54b5bc",
        "500": "#3899a2",
        "600": "#358692",
        "700": "#2e6670",
        "800": "#2c555e",
        "900": "#294850",
        "950": "#172f35"
      },
      "accent": {
        "50": "#faf7ec",
        "100": "#f3ebce",
        "200": "#e8d5a0",
        "300": "#dab96a",
        "400": "#cc9a37",
        "500": "#bf8a33",
        "600": "#a46d2a",
        "700": "#845024",
        "800": "#6e4225",
        "900": "#5f3824",
        "950": "#371d11"
      },
      "success": {
        "50": "#ecfdf3",
        "100": "#d1fadf",
        "200": "#a8f2c6",
        "300": "#6fe6a7",
        "400": "#36d183",
        "500": "#12b76a",
        "600": "#079455",
        "700": "#057747",
        "800": "#075e3a",
        "900": "#074d32",
        "950": "#022c1c"
      },
      "warning": {
        "50": "#fffaeb",
        "100": "#ffefc6",
        "200": "#fedf89",
        "300": "#fec74b",
        "400": "#fdb022",
        "500": "#f78e09",
        "600": "#db6704",
        "700": "#b64607",
        "800": "#93360d",
        "900": "#792d0e",
        "950": "#461502"
      },
      "error": {
        "50": "#fef3f2",
        "100": "#fee4e2",
        "200": "#ffcdc9",
        "300": "#fdaaa4",
        "400": "#f97970",
        "500": "#f04438",
        "600": "#de3024",
        "700": "#bb241a",
        "800": "#9a221a",
        "900": "#80231c",
        "950": "#460d09"
      }
    },
    "textColor": {
      "primary-light": "#363536",
      "primary-dark": "#ffffff",
      "secondary-light": "#464446",
      "secondary-dark": "#e7e6e7",
      "tertiary-light": "#5d5c5e",
      "tertiary-dark": "#b0afb1",
      "primary-inverse-light": "#ffffff",
      "primary-inverse-dark": "#363536",
      "secondary-inverse-light": "#e7e6e7",
      "secondary-inverse-dark": "#464446",
      "tertiary-inverse-light": "#b0afb1",
      "tertiary-inverse-dark": "#5d5c5e",
      "disabled-light": "#b0afb1",
      "disabled-dark": "#4f4e50",
      "brand-light": "#d06369",
      "brand-dark": "#e08c8f",
      "link-light": "#3899a2",
      "link-dark": "#54b5bc",
      "link-hover-light": "#358692",
      "link-hover-dark": "#8bd2d5",
      "link-pressed-light": "#2e6670",
      "link-pressed-dark": "#bae5e7",
      "info-light": "#3899a2",
      "info-dark": "#54b5bc",
      "info-bold-light": "#358692",
      "info-bold-dark": "#8bd2d5",
      "notice-light": "#f78e09",
      "notice-dark": "#fdb022",
      "notice-bold-light": "#b64607",
      "notice-bold-dark": "#fec74b",
      "positive-light": "#12b76a",
      "positive-dark": "#36d183",
      "positive-bold-light": "#079455",
      "positive-bold-dark": "#6fe6a7",
      "negative-light": "#f04438",
      "negative-dark": "#f97970",
      "negative-bold-light": "#de3024",
      "negative-bold-dark": "#fdaaa4"
    },
    "backgroundColor": {
      "primary-light": "#ffffff",
      "primary-dark": "#363536",
      "hover-light": "#f6f5f6",
      "hover-dark": "#464446",
      "pressed-light": "#e7e6e7",
      "pressed-dark": "#4f4e50",
      "selected-light": "#fae9e9",
      "selected-dark": "#832e3c",
      "disabled-light": "#f6f5f6",
      "disabled-dark": "#464446",
      "inverse-light": "#363536",
      "inverse-dark": "#ffffff",
      "brand-light": "#d06369",
      "brand-dark": "#e08c8f",
      "brand-hover-light": "#bb4351",
      "brand-hover-dark": "#ecb5b6",
      "brand-pressed-light": "#a93847",
      "brand-pressed-dark": "#f4d7d7",
      "info-light": "#3899a2",
      "info-dark": "#54b5bc",
      "info-subtle-light": "#daf2f3",
      "info-subtle-dark": "#2c555e",
      "notice-light": "#f78e09",
      "notice-dark": "#fdb022",
      "notice-subtle-light": "#ffefc6",
      "notice-subtle-dark": "#93360d",
      "negative-light": "#f04438",
      "negative-dark": "#f97970",
      "negative-subtle-light": "#fee4e2",
      "negative-subtle-dark": "#9a221a",
      "positive-light": "#12b76a",
      "positive-dark": "#36d183",
      "positive-subtle-light": "#d1fadf",
      "positive-subtle-dark": "#075e3a"
    },
    "borderColor": {
      "transparent": 'transparent',
      "primary-light": "#5d5c5e",
      "primary-dark": "#888789",
      "secondary-light": "#888789",
      "secondary-dark": "#5d5c5e",
      "tertiary-light": "#d1d0d1",
      "tertiary-dark": "#464446",
      "disabled-light": "#d1d0d1",
      "disabled-dark": "#4f4e50",
      "brand-light": "#d06369",
      "brand-dark": "#e08c8f",
      "inverse-light": "#ffffff",
      "inverse-dark": "#363536",
      "focus-light": "#3899a2",
      "focus-dark": "#54b5bc",
      "info-light": "#3899a2",
      "info-dark": "#54b5bc",
      "notice-light": "#f78e09",
      "notice-dark": "#fdb022",
      "negative-light": "#f04438",
      "negative-dark": "#f97970",
      "positive-light": "#12b76a",
      "positive-dark": "#36d183"
    },
    "spacing": {
      "auto": "auto",
      "none": "0px",
      "2xs": "2px",
      "xs": "4px",
      "s": "8px",
      "m": "12px",
      "l": "16px",
      "xl": "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "48px",
      "5xl": "56px",
      "6xl": "64px",
      "7xl": "72px",
      "8xl": "80px",
      "9xl": "88px",
      "10xl": "96px",
      "11xl": "104px",
      "12xl": "112px"
    },
    "borderRadius": {
      "circle": "50px",
      "pill": "999px",
      "l": "16px",
      "m": "12px",
      "s": "8px",
      "xs": "4px"
    },
    "borderWidth": {
      "xl": "8px",
      "l": "4px",
      "m": "2px",
      "s": "1.5px",
      "xs": "1px"
    },
    "screens": {
      "xl": "1440px",
      "l": "1024px",
      "m": "768px",
      "s": "393px"
    },
    "letterSpacing": {
      "xs": "-1px",
      "s": "-0.5px",
      "none": "0px"
    },
    "fontSize": {
      "xs": "10px",
      "s": "12px",
      "m": "14px",
      "l": "16px",
      "xl": "18px",
      "2xl": "20px",
      "3xl": "24px",
      "4xl": "28px",
      "5xl": "32px",
      "6xl": "40px",
      "7xl": "48px",
      "8xl": "56px",
      "9xl": "64px",
      "10xl": "72px"
    },
    "lineHeight": {
      "xs": "14px",
      "s": "16px",
      "m": "20px",
      "l": "24px",
      "xl": "26px",
      "2xl": "28px",
      "3xl": "32px",
      "4xl": "36px",
      "5xl": "40px",
      "6xl": "48px",
      "7xl": "56px",
      "8xl": "64px",
      "9xl": "72px",
      "10xl": "80px"
    },
    "caretColor": ({ theme }) => theme('textColor'),
  }
}
