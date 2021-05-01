import { FC } from 'react';
import { ThemeProvider as MaterialUIProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { orange, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[900]
    },
    secondary: {
      main: grey[900]
    }
  }
});

export const ThemeProvider: FC = ({ children }) => (
  <MaterialUIProvider theme={theme}>
    <CssBaseline />
    {children}
  </MaterialUIProvider>
);