import React, { ReactNode, useMemo, useState } from 'react';
import { Fade, Flex, Icon, Input, Title } from '@atoms';
import { MarginProps } from '@theme';
import { GenericObject } from '@types';
import {
  DropdownSelectedItemProps,
  getOptionsFiltered,
  normalizeValue,
} from './Dropdown.logic';
import * as S from './Dropdown.style';

export type DropdownOptionProps<T> = T & {
  before?: ReactNode;
};

export interface DropdownProps<T> extends MarginProps {
  id?: string | number;
  value?: T | DropdownOptionProps<T>;
  options?: Array<T | DropdownOptionProps<T>>;
  placeholder?: string;
  readOnly?: boolean;
  menuTop?: boolean;
  keyOfLabel?: keyof T;
  onChange?: (value: T) => void;
  onBlur?: () => void;
}

export const Dropdown = <T extends GenericObject>({
  value,
  options,
  placeholder,
  keyOfLabel,
  readOnly,
  menuTop,
  onChange,
  onBlur,
  ...props
}: DropdownProps<T>) => {
  let focused = false;
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  const selectedItem = useMemo(() => {
    return normalizeValue<T>({
      value,
      keyOfLabel,
    } as DropdownProps<T>) as DropdownSelectedItemProps<T>;
  }, [keyOfLabel, value]);

  const optionsNormalized = useMemo(() => {
    return normalizeValue<T>({
      value: options,
      keyOfLabel,
    } as DropdownProps<T>);
  }, [keyOfLabel, options]);

  const optionsFiltered = useMemo(() => {
    return getOptionsFiltered(
      Array.isArray(optionsNormalized) ? optionsNormalized : [],
      filter,
    );
  }, [filter, optionsNormalized]);

  const hasSelectedItem = useMemo(
    () => !!selectedItem.label,
    [selectedItem.label],
  );
  const id = String(props.id);

  if (readOnly) {
    return (
      <S.ReadOnly>
        <Title {...props} fs1 ellipsis>
          {selectedItem.label}
        </Title>
      </S.ReadOnly>
    );
  }

  return (
    <S.Container
      id={id}
      data-testid={id}
      tabIndex={0}
      onClick={() => {
        setOpen(true);
      }}
      onBlur={() => {
        setTimeout(() => {
          if (focused) {
            return;
          }
          setOpen(false);
          onBlur && onBlur();
        }, 300);
      }}
    >
      <Title fs1 ellipsis n3={!hasSelectedItem} p1={hasSelectedItem}>
        {selectedItem.label || placeholder || ''}
      </Title>
      <S.IconArrow>
        <Icon.RightOpen xs rotate90={open} />
      </S.IconArrow>
      {open && (
        <Fade>
          <S.Menu menuTop={menuTop}>
            <S.Filter>
              <Input
                fs1
                value={filter}
                id={`${id}-filter`}
                onClick={() => {
                  focused = true;
                }}
                onBlur={() => {
                  focused = false;
                }}
                onChange={(e) => setFilter(e.target.value)}
              />
              <S.IconSearch>
                <Icon.Search sm />
              </S.IconSearch>
            </S.Filter>
            {optionsFiltered.map((opt, index) => (
              <S.MenuItem
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                  onChange && onChange(opt.value as T);
                }}
              >
                {opt.before && <Flex mr2>{opt.before}</Flex>}
                {opt.label}
              </S.MenuItem>
            ))}
          </S.Menu>
        </Fade>
      )}
    </S.Container>
  );
};
