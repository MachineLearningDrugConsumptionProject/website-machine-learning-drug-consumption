import svgToTinyDataUri from "mini-svg-data-uri";
import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-background": "#070a09",
        "dark-primary": "#cdd2b9",
        "dark-secondary": "#123642",
        "dark-accent": "#F7E6C8",
        "light-background": "#1f282a",
        "light-primary": "#eaeeed",
        "light-accent": "#F7E6C8",
      },
    },
   
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: `
            1px 1px 2px rgba(145, 145, 145, 0.5),
            1px 3px 3px rgba(16, 16, 16, 0.4),
            1px 5px 5px rgba(16, 16, 16, 0.3)
          `,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
