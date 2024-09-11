import { Flex, Icon, Link } from "@atoms";
import * as S from './ButtonTheme.style';

interface ButtonThemeProps {
  onChange: () => void;
}
export const ButtonTheme = ({ onChange }: ButtonThemeProps) => { 
  return (
    <S.ButtonTheme>
      <Flex.Row>
        <Link mr3 onClick={() => onChange()}>
          <Icon.Moon sm s4 />
        </Link>
        <Link onClick={() => onChange()}>
          <Icon.Sun sm s4 />
        </Link>
      </Flex.Row>
    </S.ButtonTheme>
  );
};