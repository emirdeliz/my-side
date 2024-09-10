import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Row, RowProps, Col } from '@atoms';
import styled from 'styled-components';

export default {
  title: 'Components/Atoms/Row',
  component: Row,
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

const Template: Story<RowProps> = () => (
  <Container>
    <Row>
      <Col de="2">
        <Content>c2</Content>
      </Col>
      <Col de="3">
        <Content>c3</Content>
      </Col>
      <Col de="7">
        <Content>c7</Content>
      </Col>
    </Row>
  </Container>
);

export const RowSimple = Template.bind({});
