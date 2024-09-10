import { render } from 'test/TestUtils';
import { Col } from './Col';

const ColSimple = () => (
  <>
    <Col.C1 />
    <Col.C2 />
    <Col.C3 />
    <Col.C4 />
    <Col.C5 />
    <Col.C6 />
    <Col.C7 />
    <Col.C8 />
    <Col.C9 />
    <Col.C10 />
    <Col.C11 />
    <Col.C12 />
    <Col.Auto />
  </>
);

describe('Col component test', () => {
  it('Have Col', async () => {
    const { baseElement: colNode } = render(<ColSimple />);
    expect(typeof colNode).toEqual(typeof (<ColSimple />));
  });

  it('Have Col c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, auto', async () => {
    const { baseElement: colNode } = render(<ColSimple />);
    const cols = (colNode.children[0].children ||
      []) as HTMLCollectionOf<HTMLDivElement>;

    expect(cols[0]).toHaveStyleRule('flex', '0 0 8.333333%');
    expect(cols[1]).toHaveStyleRule('flex', '0 0 16.666667%');
    expect(cols[2]).toHaveStyleRule('flex', '0 0 25%');
    expect(cols[3]).toHaveStyleRule('flex', '0 0 33.333333%');
    expect(cols[4]).toHaveStyleRule('flex', '0 0 41.666667%');
    expect(cols[5]).toHaveStyleRule('flex', '0 0 50%');
    expect(cols[6]).toHaveStyleRule('flex', '0 0 58.333333%');
    expect(cols[7]).toHaveStyleRule('flex', '0 0 66.666667%');
    expect(cols[8]).toHaveStyleRule('flex', '0 0 75%');
    expect(cols[9]).toHaveStyleRule('flex', '0 0 83.333333%');
    expect(cols[10]).toHaveStyleRule('flex', '0 0 91.666667%');
    expect(cols[11]).toHaveStyleRule('flex', '0 0 100%');
    expect(cols[12]).toHaveStyleRule('flex-grow', '1');
    expect(cols[12]).toHaveStyleRule('flex-basis', '0');
  });
});
