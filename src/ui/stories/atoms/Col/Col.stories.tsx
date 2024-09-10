import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Col, ColProps, ColSize, Row } from '@atoms';
import styled from 'styled-components';

export default {
  title: 'Components/Atoms/Col',
  component: Col,
} as Meta;

const Container = styled.div`
  width: 500px;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.N2};
  padding: ${({ theme }) => theme.padding.Nm};
  margin-bottom: ${({ theme }) => theme.margin.Nm};
  width: 100%;
`;

const Template: Story<ColProps> = () => (
  <Col.C12>
    {[
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      'auto',
    ].map((item) => (
      <Col de={item as ColSize} key={item}>
        <Content>{item}</Content>
      </Col>
    ))}
  </Col.C12>
);

export const ColSimple = Template.bind({});
