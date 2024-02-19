import { createTheme } from "@mui/material/styles";
import { esES } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#eed130",
      },
      secondary: {
        main: "#ffe700",
      },
      thirdy: {
        main: "#ededed",
      },
      orange: {
        main: "#FF5F00",
      },
      grey: {
        main: "#B5B0AD",
      },
      black: {
        main: "#403B33",
      },
      error: {
        main: "#ff3333",
        hover: "#403B33",
      },
      success: {
        main: "#4CAF50",
      },
      white: {
        main: "#FFFFFF",
      },
      red: {
        main: "#dc3545",
        contrastText: "#e3f2fd",
      },
      blue: {
        main: "#007bff",
        contrastText: "#e3f2fd",
      },
    },
    typography: {
      fontFamily: ["Verdana", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
  esES
);

export default theme;
