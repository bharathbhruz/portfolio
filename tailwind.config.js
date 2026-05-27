module.exports = {
  content: ["./index.html", "./js/**/*.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#05070d",
          surface: "#0c121e",
          cyan: "#5eead4",
          blue: "#60a5fa",
          gold: "#f8c46b"
        }
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 30px 90px rgba(0, 0, 0, 0.34)"
      }
    }
  }
};
