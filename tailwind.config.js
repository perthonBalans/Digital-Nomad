export default {
  content: ["./index.html", "./main.js", "./App.vue", "./sections/**/*.vue"],
  theme: {
    extend: {
      colors: {
        ink: "#11100e",
        paper: "#fbf5e9",
        cream: "#f8f2e8",
        tape: "#ead3b8",
        ember: "#d73512",
        sage: "#3f7a43",
        ocean: "#1f64a6",
        clay: "#c66a3c",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        type: ["Special Elite", "Courier New", "monospace"],
        hand: ["Kalam", "cursive"],
      },
      boxShadow: {
        paper: "0 18px 36px rgba(25, 21, 18, 0.13)",
        card: "0 12px 24px rgba(27, 22, 18, 0.16)",
      },
    },
  },
  plugins: [],
};
