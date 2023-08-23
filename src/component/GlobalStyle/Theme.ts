import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#21BF48",
    },
    text: {
      primary: "#000",
      secondary: "#767676",
    },
    grey: {
      "100": "#F2F2F2",
      "200": "#C4C4C4",
      "300": "#767676",
    },
    error: {
      main: "#eb5757",
    },
    background: {
      default: "#fff",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "white",
          fontSize: "16px",
        },
        outlinedPrimary: {
          color: "#767676",
          border: "1px solid #c4c4c4",
        },
        sizeLarge: {
          height: "60px",
        },
        sizeMedium: {
          height: "56px",
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: "500",
        },
      },
    },
  },

  typography: {
    fontFamily: '"Spoqa Han Sans Neo", sans-serif',

    h1: { fontSize: "36px", lineHeight: "36px", fontWeight: 700 },
    h2: { fontSize: "36px", lineHeight: "36px", fontWeight: 400 },
    h3: { fontSize: "24px", lineHeight: "30px", fontWeight: 700 },
    h4: { fontSize: "18px", lineHeight: "22px", fontWeight: 400 },
    h5: { fontSize: "16px", lineHeight: "22px", fontWeight: 400 },
    h6: { fontSize: "14px", lineHeight: "18px", fontWeight: 400 },
  },
});

export default theme;
