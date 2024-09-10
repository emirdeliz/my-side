import * as S from './ContentInfoRow.style';
import { Label, Title } from '@atoms';
import { ShowSkeleton } from '@molecules';

export interface ContentInfoRowProps {
  title: string;
  info?: string;
  loading: boolean;
}

export const ContentInfoRow = ({
  loading,
  title,
  info,
}: ContentInfoRowProps) => (
  <S.ContentInfo>
    <Title fs1 n2>
      {title}
    </Title>
    <ShowSkeleton when={loading} width="200px" height="14px">
      <Label fs1 fw3>
        {info}
      </Label>
    </ShowSkeleton>
  </S.ContentInfo>
);
