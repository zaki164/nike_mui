import { alpha, createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#FF6452",
    },
    secondary: {
      main: "#6D6D6D",
    },
    info: {
      main: "#333",
    },
    darkGray: {
      main: "#888",
    },
    modalColor: {
      main: "#454444",
    },
    darkbg: {
      main: "#1a1719",
    },
    whiteSlate: {
      main: alpha("#fff", 0.8),
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});
