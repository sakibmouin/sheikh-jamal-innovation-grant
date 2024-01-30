/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./apply.html", "./form.html"],
  theme: {
    extend: {
      colors: {
        blue: "#051419",
        green: "#0C443B",
        white: "#FFFFFF",
        green2: "#35635C",
        green3: "#5D827C",
      },
    },
    fontFamily: {
      bahn: ["Bahnschrift", "sans-serif"],
      bebasneue: ["Bebas Neue", "sans-serif"],
      square: ["SquareFont", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
};
