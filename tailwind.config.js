module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      body: ['"Poppins"', "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "3rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    fontSize: {
      tiny: "0.625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      outline: {
        "no-chrome": "none",
      },
      spacing: { 96: "32rem" },
      colors: {
        blurple: "#7289da",
        primary: {
          400: "#F9B233",
          DEFAULT: "#F39200",
          700: "#E94E1B",
          900: "#BE1622"
        },
        secondary: {
          DEFAULT: "#252830",
          700: "#21232C",
          900: "#121418"
        }
      },
      screens: {
        mdlg: {
          min: "768px",
          max: "1023px",
        },
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(["disabled"]),
    textColor: ({ after }) => after(["disabled"]),
    scrollbar: ["rounded", "dark"],
    extend: {
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
