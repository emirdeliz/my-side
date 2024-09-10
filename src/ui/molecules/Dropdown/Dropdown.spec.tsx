import { Story } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import { GenericObject } from '@types';
import { DropdownOptionsWithObjects, DropdownSimple } from '@stories';
import { render } from '@test';
import { DropdownProps } from '..';

const renderDropdown = async (
  dropdown: Story<DropdownProps<GenericObject>>,
  props?: DropdownProps<GenericObject>
) => {
  const Dropdown = dropdown;
  const { baseElement } = render(<Dropdown {...dropdown.args} {...props} />);
  return baseElement;
};

describe('/ui/molecules/Dropdown', () => {
  describe('Dropdown component test', () => {
    it('Have Dropdown', async () => {
      const { container: dropdownNode } = render(<DropdownSimple />);
      expect(typeof dropdownNode).toEqual(typeof (<DropdownSimple />));
    });

    it('Have DropdownForm simple with select value', async () => {
      await renderDropdown(DropdownSimple);

      const dropdown = await screen.findByTestId(/categoria/i);
      expect(dropdown).toBeInTheDocument();
      fireEvent.click(dropdown);

      const option = await screen.findByText(/three/i);
      fireEvent.click(option);

      const selectedValue = await screen.findByText('Three', { exact: true });
      expect(selectedValue).toBeInTheDocument();
    });

    it('Have DropdownForm with object as options and select value', async () => {
      await renderDropdown(DropdownOptionsWithObjects);

      const dropdown = await screen.findByTestId(/categoria/i);
      expect(dropdown).toBeInTheDocument();
      fireEvent.click(dropdown);

      const option = await screen.findByText(/three/i);
      fireEvent.click(option);

      const selectedValue = await screen.findByText('Three', { exact: true });
      expect(selectedValue).toBeInTheDocument();
    });
  });
});
