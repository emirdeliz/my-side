import * as helpers from '@helpers';
import { FontSizeProps, MarginProps, PaddingProps } from '@theme';
import React, {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Flex, FormControl, Title } from '..';
import * as S from './Input.style';

const TEXT_AREA_MAX_LENGTH = 65_535;
const INPUT_TEXT_MAX_LENGTH_DEFAULT = 255;
const INPUT_NUMBER_MAX_LENGTH_DEFAULT = 12;
const INPUT_CPF_MAX_LENGTH_DEFAULT = 14;
const INPUT_RG_MAX_LENGTH_DEFAULT = 12;
const INPUT_CNPJ_MAX_LENGTH_DEFAULT = 18;
const INPUT_PHONE_MAX_LENGTH_DEFAULT = 15;
const INPUT_BARCODE_MAX_LENGTH_DEFAULT = 55;

export interface InputProps
  extends FormControl,
    FontSizeProps,
    PaddingProps,
    MarginProps {
  rg?: boolean;
  cpf?: boolean;
  cnpj?: boolean;
  currency?: boolean;
  phone?: boolean;
  barcode?: boolean;
  placeholder?: string;
  before?: ReactNode;
  after?: ReactNode;
  number?: boolean;
  textarea?: boolean;
  date?: boolean;
  maxLength?: number;
  minLength?: number;
  alignCenter?: boolean;
  password?: boolean;
  id?: string | number;
  dataTestId?: string | number;
  readOnly?: boolean;
  transparent?: boolean;
  countryState?: boolean;
  onClick?: (e: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPaste?: (e: ClipboardEvent) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}

const InputNumber = ({
  value,
  maxLength,
  dataTestId,
  onChange,
  onPaste,
  onKeyDown,
  ...props
}: InputProps) => {
  const id = useMemo(() => String(props.id), [props.id]);
  return (
    <S.Input
      {...props}
      id={id}
      value={String(value)}
      maxLength={maxLength || INPUT_NUMBER_MAX_LENGTH_DEFAULT}
      data-testid={dataTestId || ''}
      onKeyDown={onKeyDown}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const eventAsNumber = {
          ...e,
          target: {
            ...e?.target,
            value: e.target.value
              ? helpers.getNumbersOfString(e.target.value)
              : '',
          },
        } as ChangeEvent<HTMLInputElement>;

        if (onChange) {
          onChange(eventAsNumber);
        }
      }}
      onPaste={(e) => {
        if (!onPaste) {
          return;
        }
        e.preventDefault();
        const pastedData = e.clipboardData.getData('Text');
        const evenPastAsNumber = {
          ...e,
          clipboardData: {
            ...e.clipboardData,
            getData: (_v: string) => helpers.getNumbersOfString(pastedData),
          },
        };
        onPaste(evenPastAsNumber as ClipboardEvent);
      }}
    />
  );
};

const InputText = ({ dataTestId, ...props }: InputProps) => {
  const id = String(props.id || '');
  return (
    <S.Input
      {...props}
      id={id}
      data-testid={dataTestId || ''}
      value={String(props.value)}
    />
  );
};

const InputTextArea = ({ maxLength, dataTestId, ...props }: InputProps) => {
  const id = String(props.id);
  return (
    <S.TextArea
      {...props}
      id={id}
      data-testid={dataTestId || ''}
      value={String(props.value)}
      maxLength={maxLength || TEXT_AREA_MAX_LENGTH}
    />
  );
};

const InputDate = ({
  id,
  value,
  dataTestId,
  onChange,
  ...props
}: InputProps) => {
  const [valueAsString, setValueAsString] = useState<string>('');

  useEffect(() => {
    const valueFormatted = helpers.formatDateAsDDMMYYYY(value as Date);
    valueFormatted && setValueAsString(valueFormatted);
  }, [value]);

  return (
    <S.Input
      {...props}
      id={String(id)}
      data-testid={dataTestId || ''}
      value={valueAsString}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const valueFormatted = helpers.maskDate(e.target.value);
        setValueAsString(valueFormatted);

        const valueAsDate = helpers.parseStringDDMMYYYYToDate(valueFormatted);
        onChange &&
          onChange({
            target: { valueAsDate },
          } as ChangeEvent<HTMLInputElement>);
      }}
    />
  );
};

export const applyMaskMaybe = (
  value: string | number | Date | null | undefined | boolean,
  { cpf, cnpj, currency, barcode, phone, rg, countryState }: InputProps
) => {
  if (value === undefined) {
    return '';
  }
  const valueAsString = String(value);
  switch (true) {
    case cpf:
      return helpers.maskCPF(valueAsString);
    case cnpj:
      return helpers.maskCNPJ(valueAsString);
    case phone:
      return helpers.maskPhone(valueAsString);
    case barcode:
      return helpers.maskBarcode(valueAsString);
    case rg:
      return helpers.maskRG(valueAsString);
    case countryState:
      return helpers.maskCountryState(valueAsString);
    case currency:
      return helpers.maskMoney(valueAsString);
    default:
      return valueAsString;
  }
};

const getMaxLength = ({
  cpf,
  cnpj,
  rg,
  phone,
  barcode,
  maxLength,
}: InputProps) => {
  switch (true) {
    case cpf:
      return INPUT_CPF_MAX_LENGTH_DEFAULT;
    case cnpj:
      return INPUT_CNPJ_MAX_LENGTH_DEFAULT;
    case phone:
      return INPUT_PHONE_MAX_LENGTH_DEFAULT;
    case barcode:
      return INPUT_BARCODE_MAX_LENGTH_DEFAULT;
    case rg:
      return INPUT_RG_MAX_LENGTH_DEFAULT;
    default:
      return maxLength || INPUT_TEXT_MAX_LENGTH_DEFAULT;
  }
};

export const Input = ({
  rg,
  cpf,
  cnpj,
  currency,
  phone,
  number,
  textarea,
  barcode,
  maxLength,
  date,
  after,
  before,
  value,
  readOnly,
  transparent,
  dataTestId,
  countryState,
  onChange,
  onKeyDown,
  ...props
}: InputProps) => {
  const id = String(props.id);
  const maxLengthInput = getMaxLength({
    cpf,
    cnpj,
    rg,
    phone,
    barcode,
    maxLength,
  });

  if (readOnly) {
    return (
      <S.ReadOnly data-testid={dataTestId || ''}>
        <Title {...props} fs1 ellipsis>
          {applyMaskMaybe(value, {
            cpf,
            cnpj,
            rg,
            phone,
            barcode,
            countryState,
            currency,
          })}
        </Title>
      </S.ReadOnly>
    );
  }

  let input = (
    <InputText
      {...props}
      id={id}
      maxLength={maxLengthInput}
      value={applyMaskMaybe(value, {
        cpf,
        cnpj,
        phone,
        barcode,
        countryState,
        currency,
      })}
      dataTestId={dataTestId}
      onChange={(e) => {
        const eventMask = { ...e };
        if ((cpf || cnpj || phone || barcode) && eventMask.target) {
          const valueMask = currency ? e?.target.value.replace('.', '').replace(',', '')
          : helpers.getNumbersOfString(e?.target.value);
          eventMask.target.value = valueMask;
        }

        onChange &&
          onChange(
            eventMask as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          );
      }}
    />
  );
  if (number) {
    input = (
      <InputNumber
        {...props}
        value={value}
        maxLength={maxLength}
        dataTestId={dataTestId}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  }
  if (textarea) {
    input = (
      <InputTextArea
        {...props}
        maxLength={maxLength}
        value={value || ''}
        dataTestId={dataTestId}
        onChange={onChange}
      />
    );
  }

  if (date) {
    input = (
      <InputDate
        {...props}
        value={value || ''}
        dataTestId={dataTestId}
        onChange={onChange}
      />
    );
  }

  return (
    <S.Container transparent={transparent}>
      {before && <Flex.Center ml2>{before}</Flex.Center>}
      {input}
      {after && <Flex.Center mr2>{after}</Flex.Center>}
    </S.Container>
  );
};

Input.Number = (props: InputProps) => <Input {...props} number />;
Input.Phone = (props: InputProps) => <Input {...props} phone />;
Input.Cpf = (props: InputProps) => <Input {...props} cpf />;
Input.Cnpj = (props: InputProps) => <Input {...props} cnpj />;
Input.Barcode = (props: InputProps) => <Input {...props} barcode />;
Input.TextArea = (props: InputProps) => <Input {...props} textarea />;
Input.TextArea255 = (props: InputProps) => (
  <Input.TextArea {...props} maxLength={INPUT_TEXT_MAX_LENGTH_DEFAULT} />
);
