import { fireEvent, screen, render } from '@test';
import { TooltipSimple } from '@stories';
import { Tooltip, TooltipProps } from '..';
import { Story } from '@storybook/react';

const renderTooltip = async (
  tooltip: Story<TooltipProps>,
  props?: TooltipProps
) => {
  const Tooltip = tooltip;
  const { baseElement } = render(
    <Tooltip {...(tooltip.args as TooltipProps)} {...props} />
  );
  return baseElement;
};

describe('Tooltip component test', () => {
  it('Have Tooltip', async () => {
    const { container: tooltipNode } = render(
      <Tooltip title="Tooltip message example!" />
    );
    expect(typeof tooltipNode).toEqual(
      typeof (<Tooltip title="Hello world!" />)
    );
  });

  it('Have Tooltip for all position', async () => {
    renderTooltip(TooltipSimple);
    const buttons = await screen.findAllByText(/tooltip!/i);
    fireEvent.mouseEnter(buttons[0]);
    const titleTop = await screen.findByText(/hello world!/i);
    expect(titleTop).toBeInTheDocument();
    fireEvent.mouseLeave(buttons[0]);

    fireEvent.mouseEnter(buttons[1]);
    const titleLeft = await screen.findByText(/hello world!/i);
    expect(titleLeft).toBeInTheDocument();
    fireEvent.mouseLeave(buttons[1]);

    fireEvent.mouseEnter(buttons[2]);
    const titleRight = await screen.findByText(/hello world!/i);
    expect(titleRight).toBeInTheDocument();
    fireEvent.mouseLeave(buttons[2]);

    fireEvent.mouseEnter(buttons[3]);
    const titleBottom = await screen.findByText(/hello world!/i);
    expect(titleBottom).toBeInTheDocument();
  });
});
