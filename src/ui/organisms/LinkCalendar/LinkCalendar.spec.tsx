import { render, screen, fireEvent, waitFor } from '@test';
import { LinkCalendarSimple } from '@stories';
import { Story } from '@storybook/react';
import { formatDateAsDDMMYYYY } from '@helpers';
import { LinkCalendarProps } from './LinkCalendar';
import { LinkCalendar } from './LinkCalendar';

const renderLinkCalendar = async (
  link: Story<LinkCalendarProps>,
  props?: LinkCalendarProps
) => {
  const LinkCalendar = link;
  const { container } = render(<LinkCalendar {...link.args} {...props} />);
  return container;
};

describe('LinkCalendar component test', () => {
  it('Have LinkCalendar', async () => {
    const { container: linkNode } = render(<LinkCalendar />);
    expect(typeof linkNode).toEqual(typeof (<LinkCalendar />));
  });

  it('Have LinkCalendar simple with a selection of the fifth day of previous month', async () => {
    const currentDate = new Date();
    currentDate.setDate(5);

    await renderLinkCalendar(LinkCalendarSimple);

    const link = screen.getByRole('link');
    await waitFor(() => {
      fireEvent.click(link);
    });

    const currentDay = screen.getByText(currentDate.getDate());
    expect(currentDay).toBeInTheDocument();

    currentDate.setMonth(currentDate.getMonth() - 1);
    const prevButton = screen.getByTestId('link-prev-calendar');
    fireEvent.click(prevButton);

    const fiveDay = screen.getByText(currentDate.getDate());
    fireEvent.click(fiveDay);

    const fiveDaySelected = screen.getByText(formatDateAsDDMMYYYY(currentDate));
    expect(fiveDaySelected).toBeInTheDocument();
    expect(prevButton).not.toBeInTheDocument();
  });
});
