import { useMemo, useState } from 'react';
import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { LoadingProvider } from '@atoms';
import { AppTheme, AppThemeColorDark, AppThemeColorLight } from '@theme';
import GlobalStyle from './global.style';
import './_app.css';
import { Layout } from '@templates';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const theme = useMemo<DefaultTheme>(() => {
    return {
      ...AppTheme,
      color: isDarkMode ? AppThemeColorDark : AppThemeColorLight,
    };
  }, [isDarkMode]);

  return (
    <main>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </LoadingProvider>
      </ThemeProvider>
      </main>
  );
}
