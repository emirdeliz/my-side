import { screen } from '@testing-library/react';
import { render } from '@test';
import {
  TitleCapitalize,
  TitleSemibold,
  TitleFontSize,
  TitleUpperCase,
} from '@stories';
import { Story } from '@storybook/react';
import { TitleProps } from '..';
import { Title } from './Title';
import { FontSize, FontWeight } from '@theme';

const renderTitle = async (title: Story<TitleProps>, props?: TitleProps) => {
  const Title = title;
  render(<Title {...title.args} {...props} />);
  const titleNode = (await screen.findAllByText(
    /hello world/i
  )) as Array<HTMLSpanElement>;
  return titleNode;
};

describe('Title component test', () => {
  it('Have Title', async () => {
    const titleNode = render(<Title />);
    expect(typeof titleNode).toEqual(typeof (<Title />));
  });

  it('Have Title capitalize', async () => {
    const titleNode = await renderTitle(TitleCapitalize);
    expect(titleNode[0]).toHaveStyleRule('text-transform', 'capitalize');
  });

  it('Have Title uppercase', async () => {
    const titleNode = await renderTitle(TitleUpperCase);
    expect(titleNode[0]).toHaveStyleRule('text-transform', 'uppercase');
  });

  it('Have Title semi-bold', async () => {
    const titleNode = await renderTitle(TitleSemibold);
    expect(titleNode[0]).toHaveStyleRule('font-weight', FontWeight.Semibold);
  });

  it('Have Title font-size', async () => {
    const titleNode = await renderTitle(TitleFontSize);
    expect(titleNode[0]).toHaveStyleRule('font-size', FontSize.Xs);
    expect(titleNode[1]).toHaveStyleRule('font-size', FontSize.Sm);
    expect(titleNode[2]).toHaveStyleRule('font-size', FontSize.Nm);
    expect(titleNode[3]).toHaveStyleRule('font-size', FontSize.Lg);
    expect(titleNode[4]).toHaveStyleRule('font-size', FontSize.XLg);
    expect(titleNode[5]).toHaveStyleRule('font-size', FontSize.XXLg);
  });
});
