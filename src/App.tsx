import { FC } from 'react';
import { ThemeProvider } from 'layout/Theme';
import { ReduxProvider } from 'store';
import { RootRouter } from 'router';

export const App: FC = () => (
  <ReduxProvider>
    <ThemeProvider>
      <RootRouter />
    </ThemeProvider>
  </ReduxProvider>
);