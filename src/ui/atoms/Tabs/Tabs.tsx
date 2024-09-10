import React from 'react';
import { Flex } from '..';
import * as S from './Tabs.style';

export interface TabItemProps {
  id: string;
  title: string;
  active: boolean;
}

export interface TabsProps {
  tabs: Array<TabItemProps>;
  onClick: (tab: TabItemProps) => void;
}

export const Tabs = ({ tabs, onClick }: TabsProps) => {
  return (
    <Flex row>
      {tabs.map((tab: TabItemProps) => (
        <S.Tab active={tab.active} onClick={() => onClick(tab)} key={tab.id}>
          <S.TabName selected={tab.active}>{tab.title}</S.TabName>
        </S.Tab>
      ))}
    </Flex>
  );
};
