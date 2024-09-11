import { useMemo, useState } from 'react';
import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { AppTheme, AppThemeColorDark, AppThemeColorLight } from '@theme';
import { Layout } from '@templates';
import GlobalStyle from './global.style';
import './_app.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const theme = useMemo<DefaultTheme>(() => {
    return {
      ...AppTheme,
      colors: (isDarkMode ? AppThemeColorDark : AppThemeColorLight),
    } as DefaultTheme;
  }, [isDarkMode]);

  return (
    <main>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout onChangeTheme={() => setIsDarkMode(!isDarkMode)}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      </main>
  );
}
