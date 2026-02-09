import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
   palette: {
    mode: 'light',
    primary: {
      main: '#023e8a',
      light: 'rgba(2,62,138,0.64)',
    },
    secondary: {
      main: '#ff00ff',
    },
    background: {
      default: '#f4f0e8',
      paper: '#E0E1DD',
    },
    error: {
      main: '#ff0000',
    },
    warning: {
      main: '#eedd66',
    },
    info: {
      main: '#00ffff',
    },
  },
});
