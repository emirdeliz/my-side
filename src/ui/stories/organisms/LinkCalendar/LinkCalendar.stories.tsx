import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { LinkCalendar, LinkCalendarProps } from '@organisms';

const figmaUrl =
  'https://www.figma.com/file/HraHHrgUSx4NkPMrMJnM2G/Pagamentos?node-id=75%3A5735';
export default {
  title: 'Components/Organisms/LinkCalendar',
  component: LinkCalendar,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<LinkCalendarProps> = (args) => {
  const [date, setDate] = useState<Date>();
  return <LinkCalendar {...args} value={date} onChange={setDate} />;
};
Template.decorators = [withDesign];

export const LinkCalendarSimple = Template.bind({});
LinkCalendarSimple.args = {};
