import { createTheme } from "@mui/material";
// import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    inActive?: string;
    tabActive?: string;
    tabHover?: string;
  }
  interface TypeText {
    white?: string;
  }
  interface TypeBackground {
    darkmode?: string;
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#21bf48",
    },
    secondary: {
      main: "#767676",
      dark: "#C4C4C4",
    },
    inActive: "#C4C4C4",
    tabActive: "#ffffff",
    tabHover: "#EFFFF3",
    text: {
      primary: "#000000",
      secondary: "#767676",
      white: "#ffffff",
    },
    grey: {
      "100": "#F2F2F2",
      "200": "#C4C4C4",
      "300": "#767676",
    },
    error: {
      main: "#eb5757",
      // darkMain: "#CF6679",
    },
    background: {
      default: "#fff",
      darkmode: "#121212",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "SUIT-Regular, sans-serif",
          lineHeight: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "SUIT-Regular, sans-serif",
          cursor: "pointer",
          padding: 0,
          border: 0,
          display: "block",
          textAlign: "center",
          boxSizing:"border-box",
        },
        containedPrimary: {
          color: "white",
          fontSize: "16px",
        },
        outlinedPrimary: {
          border: "1px solid #c4c4c4",
          color: "black",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "black",
          border: 0,
          boxSizing: "border-box",
          fontFamily: "SUIT-Regular",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#000000", // 기본 색상을 파란색으로 설정
          // "&:hover": {
          //   backgroundColor: "rgba(0, 0, 255, 0.1)",
          // },
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
    fontFamily: '"SUIT-Regular", sans-serif',

    h1: { fontSize: "36px", lineHeight: "36px", fontWeight: 700 },
    h2: { fontSize: "36px", lineHeight: "36px", fontWeight: 400 },
    h3: { fontSize: "24px", lineHeight: "30px", fontWeight: 700 },
    h4: { fontSize: "18px", lineHeight: "22px", fontWeight: 400 },
    h5: { fontSize: "16px", lineHeight: "22px", fontWeight: 400 },
    h6: { fontSize: "14px", lineHeight: "18px", fontWeight: 400 },
  },
});

export default theme;
