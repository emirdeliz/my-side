import { render } from '@test';
import { Skeleton } from './Skeleton';

describe('Skeleton component test', () => {
  const width = '20px',
    height = '20px';
  it('Render regular (square) Skeleton', async () => {
    const { container: skeletonNode } = render(
      <Skeleton width={width} height={height} />
    );
    expect(skeletonNode.firstChild).toHaveStyleRule('width', '20px');
    expect(skeletonNode.firstChild).toHaveStyleRule('height', '20px');
    expect(typeof skeletonNode).toEqual(
      typeof (<Skeleton width={width} height={height} />)
    );
  });

  it('Render Skeleton rounded', async () => {
    const { container: skeletonNode } = render(
      <Skeleton.Rounded width={width} height={height} />
    );
    expect(skeletonNode.firstChild).toHaveStyleRule('border-radius', '100%');
    expect(skeletonNode.firstChild).toHaveStyleRule('width', '20px');
    expect(skeletonNode.firstChild).toHaveStyleRule('height', '20px');
  });
});
