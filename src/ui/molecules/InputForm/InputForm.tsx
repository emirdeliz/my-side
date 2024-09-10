import { Input, InputProps } from '@atoms';
import { FormGroup } from '../FormGroup/FormGroup';

export interface InputFormProps extends Omit<InputProps, 'onChange'> {
  children: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const InputForm = ({
  value,
  children,
  onChange,
  ...props
}: InputFormProps) => {
  const id = children ? children.replace(/\s/g, '_') : String(props.id);
  return (
    <FormGroup label={children} target={id} {...props} fw3>
      <Input
        {...props}
        id={id}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </FormGroup>
  );
};
