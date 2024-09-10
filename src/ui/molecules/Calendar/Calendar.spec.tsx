import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '@test';
import { CalendarSimple, CalendarMinDate, CalendarMaxDate } from '@stories';
import { Story } from '@storybook/react';
import { CalendarProps } from '..';
import { Calendar } from './Calendar';
import { Colors, Opacity } from '@theme';
import { getMonthByIndex } from '@helpers';

const renderCalendar = async (
  calendar: Story<CalendarProps>,
  props?: CalendarProps
) => {
  const Calendar = calendar;
  const { container } = render(<Calendar {...calendar.args} {...props} />);
  return container;
};

describe('Calendar component test', () => {
  it('Have Calendar', async () => {
    const { container: calendarNode } = render(<Calendar />);
    expect(typeof calendarNode).toEqual(typeof (<Calendar />));
  });

  it('Have Calendar simple with selection of current day', async () => {
    const currentDate = new Date();
    await renderCalendar(CalendarSimple);

    const currentDay = screen.getByText(currentDate.getDate());
    expect(currentDay).toBeInTheDocument();
    expect(currentDay).toHaveStyleRule('color', Colors.White);
  });

  it('Have Calendar with prev and next month', async () => {
    const currentDate = new Date();
    await renderCalendar(CalendarSimple);

    const prevButton = screen.getByTestId('link-prev-calendar');
    await waitFor(() => {
      fireEvent.click(prevButton);
    });

    const currentMonthPrev = screen.getByRole('title');
    const currentMonthDescriptionPrev = getMonthByIndex(
      currentDate.getMonth() - 1
    ).label;

    expect(currentMonthPrev.innerHTML).toContain(currentMonthDescriptionPrev);

    const nextButton = screen.getByTestId('link-next-calendar');
    await waitFor(() => {
      fireEvent.click(nextButton);
    });

    const currentMonthNext = screen.getByRole('title');
    const currentMonthDescriptionNext = getMonthByIndex(
      currentDate.getMonth()
    ).label;
    expect(currentMonthNext.innerHTML).toContain(currentMonthDescriptionNext);
  });

  it('Have Calendar with the previous year when the current date is 25/02/2021 and the previous button has two click', async () => {
    const currentDate = new Date(2021, 1, 25);
    await renderCalendar(CalendarSimple, { value: currentDate });

    const prevButton = screen.getByTestId('link-prev-calendar');
    fireEvent.click(prevButton);
    fireEvent.click(prevButton);

    const currentMonthPrev = screen.getByRole('title');
    const currentMonthDescriptionPrev = getMonthByIndex(
      currentDate.getMonth() - 2
    ).label;
    expect(currentMonthPrev.innerHTML).toEqual(
      `${currentMonthDescriptionPrev} ${currentDate.getFullYear() - 1}`
    );
  });

  it('Have Calendar with the next year when the current date is 25/11/2021 and the next button has two click', async () => {
    const currentDate = new Date(2021, 11, 25);
    await renderCalendar(CalendarSimple, { value: currentDate });

    const nextButton = screen.getByTestId('link-next-calendar');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const currentMonthNext = screen.getByRole('title');
    const currentMonthDescriptionNext = getMonthByIndex(
      currentDate.getMonth() + 2
    ).label;
    expect(currentMonthNext.innerHTML).toEqual(
      `${currentMonthDescriptionNext} ${currentDate.getFullYear() + 1}`
    );
  });

  it('Have Calendar with disable days when minDate is 2021/11/10 and the current date is 2021/11/14', async () => {
    await renderCalendar(CalendarMinDate);

    const prevButton = screen.getByTestId('link-prev-calendar');
    fireEvent.click(prevButton);

    const dayNextMonth = screen.getByText('2');
    fireEvent.click(dayNextMonth);
    expect(dayNextMonth).toHaveStyleRule('color', Colors.Black);
    expect(dayNextMonth.parentNode).toHaveStyleRule(
      'opacity',
      String(Opacity.Disable)
    );

    const nextButton = screen.getByTestId('link-prev-calendar');
    fireEvent.click(nextButton);

    const dayPrevMonthDisabled = screen.getByText('9');
    fireEvent.click(dayPrevMonthDisabled);
    expect(dayPrevMonthDisabled).toHaveStyleRule('color', Colors.Black);
    expect(dayPrevMonthDisabled.parentNode).toHaveStyleRule(
      'opacity',
      String(Opacity.Disable)
    );

    const dayPrevMonth = screen.getByText('13');
    fireEvent.click(dayPrevMonth);

    setTimeout((done) => {
      expect(dayPrevMonth).toHaveStyleRule('color', Colors.White);
      expect(dayPrevMonthDisabled.parentNode).toHaveStyleRule('opacity', '1');
      done();
    }, 500);
  });

  it('Have Calendar with disable days when maxDate is 2021/11/17 and the current date is 2021/11/14', async () => {
    await renderCalendar(CalendarMaxDate);

    const nextButton = screen.getByTestId('link-next-calendar');
    fireEvent.click(nextButton);

    const dayPrevMonth = screen.getByText('2');
    fireEvent.click(dayPrevMonth);
    expect(dayPrevMonth).toHaveStyleRule('color', Colors.Black);
    expect(dayPrevMonth.parentNode).toHaveStyleRule(
      'opacity',
      String(Opacity.Disable)
    );

    const prevButton = screen.getByTestId('link-prev-calendar');
    fireEvent.click(prevButton);

    const dayNextMonthDisabled = screen.getByText('18');
    fireEvent.click(dayNextMonthDisabled);
    expect(dayNextMonthDisabled).toBeInTheDocument();

    const dayNextMonth = screen.getByText('13');
    fireEvent.click(dayNextMonth);

    setTimeout((done) => {
      expect(dayNextMonth).toHaveStyleRule('color', Colors.White);
      expect(dayNextMonth.parentNode).toHaveStyleRule('opacity', '1');
      done();
    }, 500);
  });
});
