import { RootRouter } from "router";
import { ReduxProvider } from "store";
import { ThemeProvider } from "layout/Theme";

export const App: React.FC = () => (
  <ReduxProvider>
    <ThemeProvider>
      <RootRouter />
    </ThemeProvider>
  </ReduxProvider>
);