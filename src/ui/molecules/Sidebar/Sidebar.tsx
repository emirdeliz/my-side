import { useRouter } from 'next/router';
import * as S from './Sidebar.style';
import { Icon, Title } from '@atoms';

export interface SidebarItem { 
  to: string;
  label: string;
}

interface SidebarProps { 
  items: Array<SidebarItem>;
  close: boolean;
  onClose: () => void;
}

export const Sidebar = ({ items, close, onClose }: SidebarProps) => { 
  const router = useRouter();
  return (
    <S.SidebarMenu close={close}>
      <S.MenuIconOpen onClick={onClose}>
        <Icon.Menu white />
      </S.MenuIconOpen>
      {items.map((item, index) => { 
        return (
          <S.MenuItems key={index}>
            <S.MenuItemLinks onClick={() => router.push(item.to)}>
              <Title white>{item.label}</Title>
            </S.MenuItemLinks>
          </S.MenuItems>
        );
      })}
    </S.SidebarMenu>
  );
}