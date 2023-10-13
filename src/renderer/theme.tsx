import { createTheme, Theme, ThemeOptions } from '@mui/material';
import { grey } from '@mui/material/colors';
import darkScrollbar from '@mui/material/darkScrollbar';

export const defaultTheme: Theme = createTheme();

export const themeConfig: ThemeOptions = {
  shape: {
    borderRadius: 8,
  },
  palette: {
    mode: 'dark',
    background: {
      paper: grey[900],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#141D28"
        }
      },
    },
  },
};

export default createTheme(themeConfig);
