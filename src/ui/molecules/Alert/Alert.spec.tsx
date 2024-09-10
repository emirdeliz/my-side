import { screen, waitFor } from '@testing-library/react';
import { render } from '@test';
import { Story } from '@storybook/react';
import { AlertSimple, AlertInfo } from '@stories';
import { Alert } from './Alert';
import { AlertProps } from '..';
import { Colors } from '@theme';

const renderAlert = async (alert: Story<AlertProps>, props?: AlertProps) => {
  const Alert = alert;
  const { container } = render(
    <Alert {...alert.args} {...props}>
      {alert.args?.children}
    </Alert>
  );
  return container;
};

describe('Alert component test', () => {
  it('Have Alert', async () => {
    const { container: alertNode } = render(<Alert>Test</Alert>);
    expect(typeof alertNode).toEqual(typeof (<Alert>Test</Alert>));
  });

  it('Have Alert with text', async () => {
    await waitFor(() => renderAlert(AlertSimple));

    const alertText = screen.queryByText(
      /todos os dias os arquivos de retorno/i
    );
    expect(alertText).toBeInTheDocument();
    expect(alertText).toHaveStyleRule('color', Colors.P2);
    expect(alertText?.parentNode).toHaveStyleRule(
      'background-color',
      Colors.N6
    );
  });

  it('Have AlertInfo with text', async () => {
    await waitFor(() => renderAlert(AlertInfo));

    const alertText = screen.queryByText(
      /todos os dias os arquivos de retorno/i
    );
    const alertIcon = screen.getByTestId('icon');

    expect(alertText).toBeInTheDocument();
    expect(alertText).toHaveStyleRule('color', Colors.P2);
    expect(alertText?.parentNode).toHaveStyleRule(
      'background-color',
      Colors.N6
    );

    expect(alertIcon).toBeInTheDocument();
    expect(alertIcon).toHaveStyleRule('color', Colors.P2);
  });
});
