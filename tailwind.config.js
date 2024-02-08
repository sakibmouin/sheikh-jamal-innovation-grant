/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./apply.html",
    "./form.html",
    "./index2.html",
    "./apply1.html",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#181E25",
        green: "#38917A",
        white: "#FFFFFF",
        green2: "#35635C",
        green3: "#5D827C",
        pale: "#38917A",
        footerbg: "#0D1B1B",
      },
    },
    fontFamily: {
      bahn: ["Bahnschrift", "sans-serif"],
      dm: ["DM Sans", "sans-serif"],
      bebasneue: ["Bebas Neue", "sans-serif"],
      square: ["SquareFont", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      bahncon: ["Bahnschrift Bold Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
