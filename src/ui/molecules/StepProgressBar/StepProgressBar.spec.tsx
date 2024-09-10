import { render } from '@test';
import { StepProgressBarSimple, StepProgressBarCheckFromProp } from '@stories';
import { StepProgressBar, StepProgressBarProps } from '..';
import { Story } from '@storybook/react';

const renderStepProgressBar = async (
  stepProgressBar: Story<StepProgressBarProps>,
  props?: StepProgressBarProps
) => {
  const StepProgressBar = stepProgressBar;
  const { baseElement } = render(
    <StepProgressBar
      outlined
      {...(stepProgressBar.args as StepProgressBarProps)}
      {...props}
    />
  );
  return baseElement;
};

describe('StepProgressBar component test', () => {
  it('Have StepProgressBar', async () => {
    const { container: stepProgressBarNode } = render(
      <StepProgressBar steps={[]} />
    );
    expect(typeof stepProgressBarNode).toEqual(
      typeof (<StepProgressBar steps={[]} />)
    );
  });

  it('Have StepProgressBar content', async () => {
    const stepProgressBarNode = await renderStepProgressBar(
      StepProgressBarSimple
    );
    const span = stepProgressBarNode.querySelectorAll('span');
    const icons = stepProgressBarNode.querySelectorAll('i');

    expect(span.length).toEqual(5);
    expect(icons.length).toEqual(3);
  });

  it('Have StepProgressBar content check from prop', async () => {
    const stepProgressBarNode = await renderStepProgressBar(
      StepProgressBarCheckFromProp
    );
    const span = stepProgressBarNode.querySelectorAll('span');
    const icons = stepProgressBarNode.querySelectorAll('i');

    expect(span.length).toEqual(5);
    expect(icons.length).toBeFalsy();
  });
});
