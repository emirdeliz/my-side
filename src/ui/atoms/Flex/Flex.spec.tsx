import { render } from '@test';
import { Flex } from './Flex';

describe('Flex component test', () => {
  it('Have Flex', async () => {
    const { baseElement: flexNode } = render(<Flex>H</Flex>);
    expect(typeof flexNode).toEqual(typeof (<Flex>H</Flex>));
  });

  it('Have Flex center', async () => {
    const { baseElement: flexNode } = render(<Flex.Center>H</Flex.Center>);
    expect(flexNode.firstChild?.firstChild).toHaveStyleRule(
      'align-items',
      'center'
    );
    expect(flexNode.firstChild?.firstChild).toHaveStyleRule(
      'justify-content',
      'center'
    );
  });

  it('Have Flex width full height full', async () => {
    const { baseElement: flexNode } = render(
      <Flex.Center wFull hFull>
        H
      </Flex.Center>
    );
    expect(flexNode.firstChild?.firstChild).toHaveStyleRule('width', '100%');
    expect(flexNode.firstChild?.firstChild).toHaveStyleRule('height', '100%');
  });
});
