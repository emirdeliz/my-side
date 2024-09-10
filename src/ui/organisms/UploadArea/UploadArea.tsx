import React, {
  ChangeEvent,
  DragEvent,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { Colors } from '@theme';
import { Button, Flex, Icon, IconOptions, Title } from '@atoms';
import { UploadList } from './components';
import * as S from './UploadArea.style';

export const UPLOAD_FILES_LIMIT_DEFAULT = 5;

export interface UploadInputItem {
  id?: number;
  file?: File;
  description?: string;
  hasError?: boolean;
}

export interface UploadAreaProps {
  value?: Array<File> | File;
  title?: ReactNode;
  children?: ReactNode;
  accept?: string[];
  multiple?: boolean;
  icon?: keyof IconOptions;
  center?: boolean;
  limit?: number;
  matchList?: boolean;
  border?: string;
  ignorePadding?: boolean;
  clearInputElementAfterSelectFiles?: boolean;
  showLimitMessage?: boolean;
  onChange: (files?: Array<File>) => void;
}

export interface UploadAreaListProps
  extends Omit<UploadAreaProps, 'value' | 'onChange'> {
  value?: Array<UploadInputItem> | UploadInputItem;
  placeholder?: string;
  ignoreDescription?: boolean;
  accept?: string[];
  border?: string;
  onChange?: (files?: Array<UploadInputItem>) => void;
  onRemove?: (
    files?: Array<UploadInputItem> | UploadInputItem,
    itemRemoved?: UploadInputItem
  ) => void;
}

export const UploadArea = ({
  children,
  title,
  accept,
  multiple,
  center,
  limit = UPLOAD_FILES_LIMIT_DEFAULT,
  value,
  matchList,
  border = 'dashed',
  ignorePadding,
  onChange: onChangeCallback,
  clearInputElementAfterSelectFiles = false,
  showLimitMessage = true,
}: UploadAreaProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadRef = useRef<HTMLDivElement>(null);

  const onChange = (files?: File[] | undefined) => {
    onChangeCallback(files);
    if (
      clearInputElementAfterSelectFiles &&
      inputRef.current &&
      inputRef.current.value
    ) {
      inputRef.current.value = '';
    }
  };

  const dragDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const kindsAccept = accept || ['image/png', 'application/pdf'];
    if (e.dataTransfer.items) {
      const files = [] as File[];
      for (let i = 0; i < e.dataTransfer.items.length && i < limit; i += 1) {
        const file = e.dataTransfer.items[i].getAsFile();
        const isAccept = kindsAccept.join(',').includes(file?.type || '');
        if (isAccept) {
          file && files.push(file);
        }
      }
      onChange(files);
    }
  };

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (uploadRef.current && !matchList) {
      uploadRef.current.style.borderColor = Colors.P1;
    }
  };

  const mouseLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (uploadRef.current && !matchList) {
      uploadRef.current.removeAttribute('style');
    }
  };

  const selectFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from((e.target as HTMLInputElement).files || []);
    onChange(files);
  };

  const buildKinds = useCallback(() => {
    const kindsAllowed = accept || ['application/pdf'];
    return kindsAllowed.map((k) => `.${k.split('/')[1] || ''}`).join(',');
  }, [accept]);

  const reachedFileLimit = useMemo(
    () => Array.isArray(value) && value.length >= limit,
    [value, limit]
  );

  return !reachedFileLimit ? (
    <S.UploadArea
      ref={uploadRef}
      data-testid="upload-area"
      center={center}
      ignorePadding={ignorePadding}
      onDragOver={dragOver}
      onMouseLeave={mouseLeave}
      onDrop={dragDrop}
      matchList={matchList}
      border={border}
      onClick={() => inputRef.current && inputRef.current.click()}
    >
      <Title fs1>{title}</Title>
      {children}
      <S.InputFile
        ref={inputRef}
        multiple={multiple}
        accept={buildKinds()}
        onChange={selectFiles}
      />
    </S.UploadArea>
  ) : showLimitMessage ? (
    <Title fs1 red center>
      Limite de {limit} arquivos atingido.
    </Title>
  ) : (
    <></>
  );
};

const UploadBase = ({
  value,
  multiple,
  title,
  ignoreDescription,
  children,
  icon,
  matchList,
  onChange,
  onRemove,
  ...props
}: UploadAreaListProps & { children: ReactNode }) => {
  const updateFiles = (files: Array<File> | File) => {
    const newValue = (Array.isArray(files) ? files : [files]) as Array<File>;
    let newFiles = newValue.map((file: File) => ({
      file,
    })) as UploadInputItem[];
    if (value) {
      const oldValue = (
        Array.isArray(value) ? value : [value]
      ) as UploadInputItem[];
      newFiles = [...newFiles, ...oldValue];
    }
    onChange && onChange(newFiles);
  };

  const uploadValue = useMemo(() => {
    if (Array.isArray(value)) {
      return value.map((item) => item.file) as Array<File>;
    }
    return value?.file;
  }, [value]);

  return (
    <Flex wFull>
      <S.Input matchList={matchList}>
        <UploadArea
          {...props}
          value={uploadValue}
          multiple={multiple}
          matchList={matchList}
          onChange={(f) => updateFiles(f || [])}
        >
          <Flex.Row wFull hFull alignCenter justifySpaceBetween>
            <Title p1={matchList}>{title}</Title>
            <S.Icon matchList={matchList}>
              <Icon
                upload
                p1
                circled
                bgColored
                nm
                {...{ [icon as string]: true }}
              />
            </S.Icon>
          </Flex.Row>
        </UploadArea>
      </S.Input>
      <S.List matchList={matchList}>{children}</S.List>
    </Flex>
  );
};

const Input = ({
  matchList,
  border = 'dashed',
  ignoreDescription,
  value,
  onChange,
  onRemove,
  ...props
}: UploadAreaListProps) => {
  const propsInput = { ignoreDescription, value, onChange, onRemove, ...props };
  return (
    <S.Container matchList={matchList} border={border}>
      <UploadBase {...props} {...propsInput} matchList={matchList}>
        <UploadList
          {...props}
          matchList={matchList}
          value={Array.isArray(value) || !value ? value : [value]}
          hasDescription={!ignoreDescription}
          onChange={onChange}
          onRemove={onRemove}
        />
      </UploadBase>
    </S.Container>
  );
};

UploadArea.Input = Input;

const UploadButton = ({ title, ...props }: UploadAreaProps) => {
  return (
    <Flex justifyCenter alignCenter>
      <UploadArea {...props} ignorePadding>
        <Button>{title}</Button>
      </UploadArea>
    </Flex>
  );
};

UploadArea.Button = UploadButton;
