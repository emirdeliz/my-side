import { memo, useState } from "react";
import { Flex, Title } from "@atoms";
import { DropdownForm } from "@organisms";
import * as S from './DropdownTheme.style';

interface DropdownThemeProps { 
  onChange: (isDark: boolean) => void; 
}

const themeOptions = ['Light', 'Dark'];

export const DropdownTheme = memo(({ onChange }: DropdownThemeProps) => {
  const [theme, setTheme] = useState<string>('Light');
  return (
    <Flex alignEnd>
      <S.DropdownTheme>
        <Title mb1 s1 fs1>Theme</Title>
        <DropdownForm<string>
          options={themeOptions}
          value={theme}
          onDropdownChange={e => {
            const value = e!.value;
            setTheme(value);
            onChange(value === 'Dark');
          }}
        />
      </S.DropdownTheme>
    </Flex>
  );
});