import { Story } from '@storybook/react';
import { GenericObject } from '@types';
import {
  DropdownFormRequired,
  DropdownFormSemibold,
  DropdownFormSimple,
} from '@stories';
import { render, fireEvent, screen } from '@test';
import { DropdownFormProps } from '..';

const renderDropdownForm = async (
  dropdown: Story<DropdownFormProps<GenericObject>>,
  props?: DropdownFormProps<GenericObject>
) => {
  const DropdownForm = dropdown;
  const { baseElement } = render(
    <DropdownForm {...dropdown.args} {...props} />
  );
  return baseElement;
};

describe('/ui/molecules/DropdownForm', () => {
  describe('DropdownForm component test', () => {
    it('Have DropdownForm', async () => {
      const { container: dropdownFormNode } = render(<DropdownFormSimple />);
      expect(typeof dropdownFormNode).toEqual(typeof (<DropdownFormSimple />));
    });

    it('Have DropdownForm with label', async () => {
      await renderDropdownForm(DropdownFormSemibold);
      const label = await screen.findByText(/categoria/i);
      expect(label).toBeInTheDocument();
    });

    it('Have DropdownForm with error required', async () => {
      await renderDropdownForm(DropdownFormRequired);
      const dropdown = await screen.findByTestId(/categoria/i);
      expect(dropdown).toBeInTheDocument();

      fireEvent.click(dropdown);
      fireEvent.blur(dropdown);

      const error = await screen.findByText(/categoria inválida/i);
      expect(error).toBeInTheDocument();
    });
  });
});
