import Head from 'next/head';
import { Layout as LayoutTemplate } from "@templates";
import { ReactNode, memo } from 'react';

interface LayoutProps {
  children: ReactNode;
  onChangeTheme: () => void;
}

const Layout = memo(({ children, onChangeTheme }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Sensr-it Challenge</title>
        <meta name="description" content="Sensr-it Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutTemplate onChangeTheme={onChangeTheme}>
        {children}
      </LayoutTemplate>
    </>
  );
});

export default Layout;
