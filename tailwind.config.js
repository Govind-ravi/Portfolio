// tailwind.config.js
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if needed
];
export const theme = {
  extend: {
    screens: {
      xxs: "380px",
      xs: "480px",
      xsm: "530px",
      sm: "640px",
      md: "768px",
      ml: "900px",
      lg: "1024px",
      lg2: "1074px",
      xl: "1280px",
      "2xl": "1407px",
      "3xl": "1470px",
      xl2: "1600px",
      xl3: "2000px",
    },
    colors: {
      bg: "#080808",
      theme: "#00ffee",
      secondary: "#f4f4f4",
      tertiary: "#bdbdbd",
    },
  },
};
export const plugins = [];
