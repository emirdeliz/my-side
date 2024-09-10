import { Story } from '@storybook/react';
import { screen, fireEvent, render } from '@test';
import {
  ToastSimple,
  ToastDefault,
  ToastError,
  ToastSuccess,
  ToastWarn,
} from '@stories';
import { ToastProps } from '..';
import { getThemeColorByOptions } from '@theme';

const renderToast = async (toast: Story<ToastProps>, props?: ToastProps) => {
  const Toast = toast;
  const { baseElement } = render(<Toast {...toast.args} {...props} />);
  return baseElement;
};

describe('Toast component test', () => {
  it('Have Toast', async () => {
    const { container: toastNode } = render(<ToastSimple />);
    expect(typeof toastNode).toEqual(typeof (<ToastSimple />));
  });

  it('Have Toast info', async () => {
    await renderToast(ToastSimple);
    const link = await screen.findByTestId('show-toast');
    fireEvent.click(link);

    const toast = await screen.findByTestId('toast');
    const title = await screen.findByText(/hello world!/i);
    const subTitle = await screen.findByText(/it is a long established fact/i);

    const { bg } = getThemeColorByOptions();
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveStyleRule('background-color', bg);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('Have Toast default', async () => {
    await renderToast(ToastDefault);
    const link = await screen.findByTestId('show-toast');
    fireEvent.click(link);

    await new Promise((r) => setTimeout(r, 1000));
    const toast = await screen.findByTestId('toast');
    const title = await screen.findByText(/hello world!/i);
    const subTitle = await screen.findByText(/it is a long established fact/i);

    const { bg } = getThemeColorByOptions({ default: true });
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveStyleRule('background-color', bg);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('Have Toast error', async () => {
    await renderToast(ToastError);
    const link = await screen.findByTestId('show-toast');
    fireEvent.click(link);

    await new Promise((r) => setTimeout(r, 1000));
    const toast = await screen.findByTestId('toast');
    const title = await screen.findByText(/hello world!/i);
    const subTitle = await screen.findByText(/it is a long established fact/i);

    const { bg } = getThemeColorByOptions({ error: true });
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveStyleRule('background-color', bg);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('Have Toast success', async () => {
    await renderToast(ToastSuccess);
    const link = await screen.findByTestId('show-toast');
    fireEvent.click(link);

    await new Promise((r) => setTimeout(r, 1000));
    const toast = await screen.findByTestId('toast');
    const title = await screen.findByText(/hello world!/i);
    const subTitle = await screen.findByText(/it is a long established fact/i);

    const { bg } = getThemeColorByOptions({ success: true });
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveStyleRule('background-color', bg);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('Have Toast warn', async () => {
    await renderToast(ToastWarn);
    const link = await screen.findByTestId('show-toast');
    fireEvent.click(link);

    await new Promise((r) => setTimeout(r, 1000));
    const toast = await screen.findByTestId('toast');
    const title = await screen.findByText(/hello world!/i);
    const subTitle = await screen.findByText(/it is a long established fact/i);

    const { bg } = getThemeColorByOptions({ warn: true });
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveStyleRule('background-color', bg);

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
