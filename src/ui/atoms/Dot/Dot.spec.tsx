import { render } from '@test';
import { Colors } from '@theme';
import { DotXss, DotXs, DotSm, DotNm } from './Dot.style';
import { Dot } from './Dot';

describe('Dot component test', () => {
  it('Have Dot', async () => {
    const { baseElement: dotNode } = render(<Dot />);
    expect(typeof dotNode).toEqual(typeof (<Dot />));
  });

  it('Have Dot xss', async () => {
    const { container: dotNode } = render(<Dot.Xss />);
    expect(dotNode.firstChild).toHaveStyleRule(
      'padding',
      `${DotXss} ${DotXss}`
    );
  });

  it('Have Dot xs', async () => {
    const { container: dotNode } = render(<Dot.Xs />);
    expect(dotNode.firstChild).toHaveStyleRule('padding', `${DotXs} ${DotXs}`);
  });

  it('Have Dot Sm', async () => {
    const { container: dotNode } = render(<Dot.Sm />);
    expect(dotNode.firstChild).toHaveStyleRule('padding', `${DotSm} ${DotSm}`);
  });

  it('Have Dot Nm', async () => {
    const { container: dotNode } = render(<Dot.Nm />);
    expect(dotNode.firstChild).toHaveStyleRule('padding', `${DotNm} ${DotNm}`);
  });

  it('Have Dot outlined', async () => {
    const { container: dotNode } = render(<Dot.Sm outlined p1 />);
    expect(dotNode.firstChild).toHaveStyleRule('background-color', undefined);
    expect(dotNode.firstChild).toHaveStyleRule(
      'border',
      `solid 1px ${Colors.P1}`
    );
  });
});
