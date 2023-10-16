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
      main: "#FF5733",
    },
    modalColor: {
      main: "#454444",
    },
    darkbg: {
      main: "#1a1719",
    },
    whiteSlate: {
      main: alpha("#fff", 0.8),
      // main: palette.common.white,
    },
  },
});
