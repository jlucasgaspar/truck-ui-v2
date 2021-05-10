import { ThemeProvider as MaterialUIProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./theme";

export const ThemeProvider: React.FC = ({ children }) => (
  <MaterialUIProvider theme={theme}>
    <CssBaseline />
    {children}
  </MaterialUIProvider>
);