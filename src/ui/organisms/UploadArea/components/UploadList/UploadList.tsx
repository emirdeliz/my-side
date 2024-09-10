import { ChangeEvent, useMemo, useState } from 'react';
import { updateArray } from '@helpers';
import { Flex, Title } from '@atoms';
import { UploadInputItem } from '@organisms';
import { UploadItem } from '..';

interface UploadListProps {
  value?: Array<UploadInputItem>;
  placeholder?: string;
  hasDescription?: boolean;
  matchList?: boolean;
  accept?: string[];
  onChange?: (items: Array<UploadInputItem>) => void;
  onRemove?: (
    items: Array<UploadInputItem>,
    itemRemoved: UploadInputItem
  ) => void;
}

export const UploadList = ({
  value,
  hasDescription,
  accept,
  matchList,
  onChange,
  onRemove,
  ...props
}: UploadListProps) => {
  const [carouselCurrentItem, setCarouselCurrentItem] = useState<File>();
  const items = useMemo(() => {
    return (value || []).map((value) => {
      const hasError = !(accept || []).includes(value.file?.type || '');
      return { ...value, hasError };
    });
  }, [value, accept]);

  const updateUploadItem = (
    index: number,
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const itemsUpdated = updateArray(
      items,
      { ...items[index], description: e.target.value },
      index
    );
    onChange && onChange(itemsUpdated);
  };

  const removeUploadItem = (index: number) => {
    const itemsUpdated = [...items];
    const itemRemoved = itemsUpdated.splice(index, 1)[0];
    onRemove && onRemove(itemsUpdated, itemRemoved);
  };

  const files = useMemo(
    () =>
      items
        .filter((item) => !!item.file)
        .map((item) => item.file) as Array<File>,
    [items]
  );

  return (
    <Flex wFull>
      {!matchList && <Title mb2>Anexos</Title>}
      {items.map(({ file, description, hasError }, index) => (
        <UploadItem
          {...props}
          key={index}
          index={index}
          file={file}
          error={hasError}
          matchList={matchList}
          hasDescription={hasDescription}
          onClick={() => setCarouselCurrentItem(file)}
          onChange={onChange ? (e) => updateUploadItem(index, e) : undefined}
          onRemove={() => removeUploadItem(index)}
        >
          {description}
        </UploadItem>
      ))}
    </Flex>
  );
};
