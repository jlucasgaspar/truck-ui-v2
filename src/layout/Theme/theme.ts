import { createMuiTheme } from '@material-ui/core';
import { orange, grey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[900]
    },
    secondary: {
      main: grey[900]
    }
  }
});