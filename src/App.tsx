import { FC } from 'react';
import { LoginPage } from 'pages/Users';
import { ThemeProvider } from 'components/_shared/ThemeProvider';

export const App: FC = () => (
  <ThemeProvider>
    <LoginPage />
  </ThemeProvider>
);