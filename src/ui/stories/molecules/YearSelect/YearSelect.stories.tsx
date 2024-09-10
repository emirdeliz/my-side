import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { YearSelect, YearSelectProps } from '@molecules';

const figmaUrl =
  'https://www.figma.com/file/wW7x4g4eNApQg4LJ8VLcSa/Extrato?node-id=244%3A2542';

export default {
  title: 'Components/Molecules/YearSelect',
  component: YearSelect,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<YearSelectProps> = (args) => {
  return <YearSelect {...args} onClick={() => {}} />;
};
Template.decorators = [withDesign];

export const YearSelectCurrentYear = Template.bind({});
YearSelectCurrentYear.args = {
  startDate: new Date(),
};

export const YearSelectLastYear = Template.bind({});
YearSelectLastYear.args = {
  startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
};
