import React, { useState } from 'react';
import { Dropdown, DropdownProps, FormError, FormGroup } from '@molecules';
import { GenericObject } from '@types';

export interface DropdownFormProps<T>
  extends Exclude<DropdownProps<T>, 'onChange'> {
  children?: string;
  errorMsg?: string;
  fw3?: boolean;
  required?: boolean;
  onBlur?: () => void;
  onDropdownChange?: (
    item?: { value: T } & {
      hasError: boolean;
    }
  ) => void;
}

const validateInput = <T extends GenericObject>({
  value,
  keyOfLabel,
  required,
}: DropdownFormProps<T>) => {
  if (required && (!value || (keyOfLabel && !value[keyOfLabel]))) {
    throw 'Invalid value';
  }
};

export const DropdownForm = <T extends GenericObject>({
  children,
  value,
  fw3,
  onDropdownChange,
  onBlur,
  ...props
}: DropdownFormProps<T>) => {
  const [error, setError] = useState<string>('');
  const [hasFocusOut, setHasFocusOut] = useState<boolean>(false);

  const checkValue = (dropdownValue?: T) => {
    try {
      return validateInput({ ...props, value: dropdownValue });
    } catch (e) {
      setError(props.errorMsg || 'unknown');
    }
    return false;
  };

  const id = children ? children.replace(/\s/g, '_') : String(props.id);
  return (
    <FormGroup label={children} target={id} fw3={fw3} {...props}>
      <Dropdown
        {...props}
        id={id}
        value={value}
        onChange={(v) => {
          const hasError = !checkValue(v);
          onDropdownChange && onDropdownChange({ value: v, hasError });
          !hasError && setError('');
        }}
        onBlur={() => {
          setHasFocusOut(true);
          checkValue(value);
          onBlur && onBlur();
        }}
      />
      {error && hasFocusOut && <FormError>{error}</FormError>}
    </FormGroup>
  );
};
