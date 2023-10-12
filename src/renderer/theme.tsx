import { createTheme, Theme, ThemeOptions } from '@mui/material';
import { grey } from '@mui/material/colors';
import darkScrollbar from '@mui/material/darkScrollbar';

export const defaultTheme: Theme = createTheme();

export const themeConfig: ThemeOptions = {
  shape: {
    borderRadius: 0,
  },
  palette: {
    mode: 'dark',
    background: {
      paper: grey[800],
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
          paddingLeft: '1em',
          paddingRight: '1em',
          fontSize: '1em !important',
          '& a': {
            color: '#90caf9',
          },
          maxWidth: '700px',
        },
        popper: {
          maxWidth: '700px',
        },
      },
    },
  },
};

export default createTheme(themeConfig);
