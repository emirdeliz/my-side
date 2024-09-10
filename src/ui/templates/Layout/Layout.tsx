import { ReactNode, memo } from "react";
import Image from "next/image";
import { DropdownTheme } from "../DropdownTheme/DropdownTheme";
import * as S from "./Layout.style";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.Header>
        <Image src="/logo.svg" priority alt="Banner" width={595 * 0.4} height={121 * 0.4} />
      </S.Header>
      <S.LayoutContent>
        <S.Content>
          <DropdownTheme onChange={() => { }} />
          {children}
        </S.Content>
      </S.LayoutContent>
    </S.Layout>
  );
});
