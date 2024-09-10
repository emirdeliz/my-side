import * as S from './Image.style';

export interface ImageProps {
  src: string;
  alt: string;
}

export const Image = (props: ImageProps) => {
  return (
    <S.Container>
      <S.Image {...props} />
    </S.Container>
  );
};

export const ImageStyle = S;
