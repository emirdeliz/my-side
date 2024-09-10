import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '@test';
import { RadioSimple } from '@stories';
import { Story } from '@storybook/react';
import { RadioProps } from '..';
import { Radio } from './Radio';

const renderRadio = async (link: Story<RadioProps>, props?: RadioProps) => {
  const Radio = link;
  const { container } = render(<Radio {...link.args} {...props} />);
  const linkNode = container.querySelector('a') as HTMLAnchorElement;
  return linkNode;
};

describe('Radio component test', () => {
  it('Have Radio', async () => {
    const { container: linkNode } = render(<Radio />);
    expect(typeof linkNode).toEqual(typeof (<Radio />));
  });

  it('Have Radio simple', async () => {
    await renderRadio(RadioSimple);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('Have Radio value', async () => {
    await renderRadio(RadioSimple, { checked: true });
    const radio = screen.getByRole('radio');
    const { opacity } = getComputedStyle(radio, '::before');
    expect(opacity).toEqual('1');
  });

  it('Have Radio change value', async () => {
    await renderRadio(RadioSimple, { checked: true });
    const radio = screen.getByRole('radio');
    const { opacity: opacityBeforeClick } = getComputedStyle(radio, '::before');
    expect(opacityBeforeClick).toEqual('1');

    await waitFor(() => {
      fireEvent.click(radio);
    });

    setTimeout((done) => {
      const { opacity: opacityAfterClick } = getComputedStyle(
        radio,
        '::before'
      );
      expect(opacityAfterClick).toEqual('0');
      done();
    }, 500);
  });
});
