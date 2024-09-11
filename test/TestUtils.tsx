import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from '@theme';
import 'jest-styled-components';

interface ThemeTestUtilsProps {
  children: ReactNode;
}

export const ThemeTestUtils = ({ children }: ThemeTestUtilsProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement) => {
  return render(ui, { wrapper: ThemeTestUtils, ...theme });
};

export * from '@testing-library/react';
export { customRender as render };
