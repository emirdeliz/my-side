import { Flex, Title } from '@atoms';
import * as S from './Footer.style';

export const Footer = () => {
  return (
    <S.Footer>
      <Flex alignCenter justifyCenter>
        <Title>© 2021 Estudo Fácil</Title>
      </Flex>
    </S.Footer>
  );
};
