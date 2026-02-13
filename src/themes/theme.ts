import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",

    // ✅ PRIMARY = --ink
    primary: {
      main: "#0d1b2a",            // --ink
      contrastText: "#f4f0e8",    // --background-default
    },

    // ✅ SECONDARY = --primary-main (utility accent)
    secondary: {
      main: "#023e8a",            // --primary-main
      contrastText: "#ffffff",
    },

    background: {
      default: "#f4f0e8",         // --background-default
      paper: "#e0e1dd",           // --background-paper
    },

    text: {
      primary: "#0d1b2a",         // --ink
      secondary: "rgba(13,27,42,0.72)",
    },

    divider: "rgba(13,27,42,0.12)",

    error: {
      main: "#ff0000",
    },
    warning: {
      main: "#eedd66",
    },
    info: {
      main: "#023e8a", // using utility blue instead of cyan
    },
  },

  typography: {
    fontFamily: `"Funnel Sans", system-ui, sans-serif`,
  },

  shape: {
    borderRadius: 16, // matches your rounded-2xl / 3xl feel
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 999,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(13,27,42,0.12)",
        },
      },
    },
  },
});
