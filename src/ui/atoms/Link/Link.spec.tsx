import { render } from '@test';
import { LinkIcon, LinkSimple } from '@stories';
import { Story } from '@storybook/react';
import { LinkProps } from '..';
import { Link } from './Link';

const renderLink = async (link: Story<LinkProps>, props?: LinkProps) => {
  const Link = link;
  const { container } = render(<Link {...link.args} {...props} />);
  const linkNode = container.querySelector('a') as HTMLAnchorElement;
  return linkNode;
};

describe('Link component test', () => {
  it('Have Link', async () => {
    const { container: linkNode } = render(<Link />);
    expect(typeof linkNode).toEqual(typeof (<Link />));
  });

  it('Have Link simple', async () => {
    const linkNode = await renderLink(LinkSimple);
    expect(linkNode.innerHTML).toBe('Hello world!');
  });

  it('Have Link icon', async () => {
    const linkNode = await renderLink(LinkIcon);
    const icon = linkNode.querySelector('i');
    expect(linkNode.innerHTML).toMatch(/Hello world!/);
    expect(linkNode.innerHTML).toMatch(/icon-check/);
    expect(icon).toBeInTheDocument();
  });
});
