import { Colors } from '@theme';
import { render } from '@test';
import { Icon } from './Icon';
import { FontSize } from './Icon.style';

describe('Icon component test', () => {
  it('Have Icon', async () => {
    const { container: iconNode } = render(<Icon />);
    expect(typeof iconNode).toEqual(typeof (<Icon />));
  });

  it('Have Icon bank, light red, xs', async () => {
    const { container: iconNode } = render(<Icon bank lightRed xs />);
    expect(iconNode.firstChild).toHaveClass('icon-bank');
    expect(iconNode.firstChild).toHaveStyleRule('color', Colors.LightRed);
    expect(iconNode.firstChild).toHaveStyleRule('font-size', FontSize.Xs, {
      modifier: ':before',
    });
  });

  it('Have Icon check, black, sm', async () => {
    const { container: iconNode } = render(<Icon check black sm />);
    expect(iconNode.firstChild).toHaveClass('icon-check');
    expect(iconNode.firstChild).toHaveStyleRule('color', Colors.Black);
    expect(iconNode.firstChild).toHaveStyleRule('font-size', FontSize.Sm, {
      modifier: ':before',
    });
  });

  it('Have Icon arrow back, green, nm', async () => {
    const { container: iconNode } = render(<Icon arrowBack green nm />);
    expect(iconNode.firstChild).toHaveClass('icon-arrow-back');
    expect(iconNode.firstChild).toHaveStyleRule('color', Colors.Green);
    expect(iconNode.firstChild).toHaveStyleRule('font-size', FontSize.Nm, {
      modifier: ':before',
    });
  });
});
