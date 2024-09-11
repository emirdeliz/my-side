import { ReactNode, memo } from "react";
import Image from "next/image";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import * as S from "./Layout.style";

interface LayoutProps {
  children: ReactNode;
  onChangeTheme: () => void;
}

export const Layout = memo(({ children, onChangeTheme }: LayoutProps) => {
  return (
    <S.Layout>
      <S.Header>
        <Image src="/logo.svg" priority alt="Banner" width={595 * 0.4} height={121 * 0.4} />
      </S.Header>
      <S.LayoutContent>
        <S.Content>
          <ButtonTheme onChange={onChangeTheme} />
          {children}
        </S.Content>
      </S.LayoutContent>
    </S.Layout>
  );
});
