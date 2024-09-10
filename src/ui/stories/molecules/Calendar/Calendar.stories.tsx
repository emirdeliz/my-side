import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Calendar, CalendarProps } from '@molecules';

const figmaUrl =
  'https://www.figma.com/file/HraHHrgUSx4NkPMrMJnM2G/Pagamentos?node-id=6%3A2056';
export default {
  title: 'Components/Molecules/Calendar',
  component: Calendar,
  parameters: {
    design: {
      type: 'figma',
      url: figmaUrl,
    },
  },
} as Meta;

const Template: Story<CalendarProps> = (args) => {
  const [date, setDate] = useState<Date>(args.value || new Date());
  return <Calendar {...args} value={date} onChange={setDate} />;
};
Template.decorators = [withDesign];

export const CalendarSimple = Template.bind({});
CalendarSimple.args = {};

const currentDate = new Date();

export const CalendarMinDate = Template.bind({});
CalendarMinDate.args = {
  value: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
  minDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
};

export const CalendarMaxDate = Template.bind({});
CalendarMaxDate.args = {
  value: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 14),
  maxDate: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 17),
};
