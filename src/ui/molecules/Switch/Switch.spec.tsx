import { Story } from '@storybook/react';
import { fireEvent } from '@testing-library/react';
import { render, screen, waitFor } from '@test';
import { SwitchSimple } from '@stories';
import { SwitchProps } from './Switch';

const renderSwitch = async (
  switchEl: Story<SwitchProps>,
  props?: SwitchProps
) => {
  const Switch = switchEl;
  const { baseElement } = render(<Switch {...switchEl.args} {...props} />);
  return baseElement;
};

describe('Switch component test', () => {
  it('Have Switch', async () => {
    const { container: switchNode } = render(<SwitchSimple />);
    expect(typeof switchNode).toEqual(typeof (<SwitchSimple />));
  });

  it('Have Switch change on click', async () => {
    await renderSwitch(SwitchSimple);
    const switchEl = screen.getByRole('switch');
    expect(switchEl.ariaChecked).toBeFalsy();

    waitFor(() => {
      fireEvent.click(switchEl);
      expect(switchEl.ariaChecked).toBeTruthy();
    });
  });

  it('Have Switch initial value true', async () => {
    await renderSwitch(SwitchSimple, { selected: true });
    const switchEl = screen.getByRole('switch');

    waitFor(() => {
      expect(switchEl.ariaChecked).toBeTruthy();
    });
  });
});
