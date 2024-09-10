import { Flex, Input, Link, Title } from '@atoms';
import { ChangeEvent } from 'react';

interface UploadItemProps {
  file?: File;
  index?: number;
  children?: string;
  placeholder?: string;
  hasDescription?: boolean;
  error?: boolean;
  matchList?: boolean;
  onClick: () => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onRemove?: () => void;
}

export const UploadItem = ({
  file,
  children,
  placeholder,
  hasDescription,
  matchList,
  onClick,
  onChange,
  onRemove,
  error = false,
}: UploadItemProps) => {
  return (
    <Flex wFull alignStart mb3={hasDescription} mb2={!hasDescription}>
      <Flex.Row justifyCenter alignBaseline mb1={hasDescription}>
        <Link red={error} onClick={onClick} fs1 ellipsis mr1>
          {file?.name}
        </Link>
        {onRemove && <Link.Icon close xs onClick={onRemove} />}
      </Flex.Row>
      {error && (
        <Title fs1 error mb1={!matchList}>
          Tipo de arquivo inválido
        </Title>
      )}
      {hasDescription && (
        <Input
          fs1
          value={children}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </Flex>
  );
};
