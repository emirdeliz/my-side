import { fireEvent } from '@testing-library/react';
import { render } from '@test';
import { Colors, Opacity, Padding } from '@theme';
import { Button } from './Button';

describe('Button component test', () => {
  it('Have button', async () => {
    const { container: buttonNode } = render(<Button />);
    expect(typeof buttonNode.firstChild).toEqual(typeof (<button />));
  });

  it('Have button info', async () => {
    const { container: buttonNode } = render(<Button info />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'background-color',
      Colors.P2
    );
  });

  it('Have button not clickable', async () => {
    const { container: buttonNode } = render(<Button clickable={false} />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'opacity',
      String(Opacity.Disable)
    );
    expect(buttonNode.firstChild).toHaveStyleRule('cursor', 'not-allowed');
  });

  it('Have button outlined', async () => {
    const { container: buttonNode } = render(<Button outlined />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'background-color',
      '#ffffff'
    );
    expect(buttonNode.firstChild).toHaveStyleRule(
      'border',
      `solid 1px ${Colors.P2}`
    );
    expect(buttonNode.firstChild).toHaveStyleRule('color', Colors.P2);
  });

  it('Have button sm', async () => {
    const { container: buttonNode } = render(<Button sm />);
    expect(buttonNode.firstChild).toHaveStyleRule(
      'padding',
      `${Padding.Xs} ${Padding.Xs}`
    );
  });

  it('Have button click', async () => {
    const click = jest.fn();
    const { container: buttonNode } = render(<Button onClick={click} />);
    fireEvent.click(buttonNode.firstChild as Element);
    fireEvent.click(buttonNode.firstChild as Element);
    fireEvent.click(buttonNode.firstChild as Element);
    expect(click.mock.calls.length).toEqual(3);
  });
});
