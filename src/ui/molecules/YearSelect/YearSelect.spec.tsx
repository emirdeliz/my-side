import { fireEvent, screen } from '@testing-library/react';
import { render } from '@test';
import YearSelect from './YearSelect';

describe('@atoms/YearSelect', () => {
  it('Should have a button', async () => {
    render(<YearSelect startDate={new Date()} onClick={() => {}} />);
    const button = screen.getByRole('button', {
      name: String(new Date().getFullYear()),
    });
    expect(button).toBeInTheDocument();
  });

  it('Have have three buttons', async () => {
    render(
      <YearSelect
        startDate={
          new Date(new Date().setFullYear(new Date().getFullYear() - 2))
        }
        onClick={() => {}}
      />
    );
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(3);
  });

  it('Should call onClick on click', async () => {
    const onClick = jest.fn();
    render(<YearSelect startDate={new Date()} onClick={onClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
