module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [{
        emerald: {
          ...require("daisyui/colors/themes")["[data-theme=emerald]"],
          "neutral": "#fad61d",
          "neutral-content": "#333c4d",
        },
      }, "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}