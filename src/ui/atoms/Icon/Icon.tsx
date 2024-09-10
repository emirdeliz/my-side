import React from 'react';
import { ColorsProps } from '@theme';
import * as S from './Icon.style';

export interface IconOptions {
  alert?: boolean;
  alignJustify?: boolean;
  arrowBack?: boolean;
  bank?: boolean;
  calendar?: boolean;
  cartArrowDown?: boolean;
  close?: boolean;
  check?: boolean;
  desktop?: boolean;
  down?: boolean;
  download?: boolean;
  downOpen?: boolean;
  email?: boolean;
  gamepad?: boolean;
  leftOpen?: boolean;
  maintenance?: boolean;
  menu?: boolean;
  pdfDouble?: boolean;
  power?: boolean;
  rightOpen?: boolean;
  search?: boolean;
  settingsOutline?: boolean;
  tooltipMessage?: boolean;
  trashEmpty?: boolean;
  up?: boolean;
  upload?: boolean;
  upOpen?: boolean;
  user?: boolean;
  users?: boolean;
}

export interface IconProps extends IconOptions, ColorsProps {
  circled?: boolean;
  bordered?: boolean;
  bgColored?: boolean;
  xs?: boolean;
  sm?: boolean;
  nm?: boolean;
  xxxLg?: boolean;
  rotate90?: boolean;
  transactions?: boolean;
  barcode?: boolean;
  bgColor?: string;
  infoCircle?: boolean;
}

const getIcon = ({
  alert,
  alignJustify,
  arrowBack,
  bank,
  barcode,
  calendar,
  cartArrowDown,
  close,
  check,
  desktop,
  down,
  download,
  downOpen,
  email,
  gamepad,
  maintenance,
  menu,
  power,
  leftOpen,
  infoCircle,
  pdfDouble,
  rightOpen,
  search,
  settingsOutline,
  tooltipMessage,
  upload,
  upOpen,
  up,
  transactions,
  user,
  users,
  trashEmpty
}: IconProps) => {
  switch (true) {
    case alert:
      return 'alert';
    case alignJustify:
      return 'align-justify';
    case arrowBack:
      return 'arrow-back';
    case bank:
      return 'bank';
    case barcode:
      return 'barcode';
    case calendar:
      return 'calendar';
    case cartArrowDown:
      return 'cart-arrow-down';
    case close:
      return 'close';
    case check:
      return 'check';
    case desktop:
      return 'desktop';
    case down:
      return 'down';
    case download:
      return 'download';
    case downOpen:
      return 'down-open';
    case email:
      return 'email';
    case gamepad:
      return 'gamepad';
    case leftOpen:
      return 'left-open';
    case infoCircle:
      return 'info-circle';
    case maintenance:
      return 'maintenance';
    case menu:
      return 'menu';
    case pdfDouble:
      return 'pdf-double';
    case power:
      return 'power';
    case rightOpen:
      return 'right-open';
    case search:
      return 'search';
    case settingsOutline:
      return 'settings-outline';
    case tooltipMessage:
      return 'tooltip-message';
    case trashEmpty:
      return 'trash-empty';
    case transactions:
      return 'transactions';
    case upload:
      return 'upload';
    case up:
      return 'up';
    case upOpen:
      return 'up-open';
    case user:
      return 'user';
    case users:
      return 'users';
  }
  return 'power';
};

export const Icon = (props: IconProps) => {
  const icon = getIcon(props);
  return <S.Icon data-testid="icon" className={`icon-${icon}`} {...props} />;
};

Icon.Alert = (props: IconProps) => <Icon {...props} alert />;
Icon.AlignJustify = (props: IconProps) => <Icon {...props} alignJustify />;
Icon.ArrowBack = (props: IconProps) => <Icon {...props} arrowBack />;
Icon.Bank = (props: IconProps) => <Icon {...props} bank />;
Icon.Barcode = (props: IconProps) => <Icon {...props} barcode />;
Icon.Calendar = (props: IconProps) => <Icon {...props} calendar />;
Icon.CartArrowDown = (props: IconProps) => <Icon {...props} cartArrowDown />;
Icon.Close = (props: IconProps) => <Icon {...props} close />;
Icon.Check = (props: IconProps) => <Icon {...props} check />;
Icon.Desktop = (props: IconProps) => <Icon {...props} desktop />;
Icon.Down = (props: IconProps) => <Icon {...props} upOpen />;
Icon.Download = (props: IconProps) => <Icon {...props} download />;
Icon.DownOpen = (props: IconProps) => <Icon {...props} downOpen />;
Icon.Email = (props: IconProps) => <Icon {...props} email />;
Icon.Gamepad = (props: IconProps) => <Icon {...props} gamepad />;
Icon.LeftOpen = (props: IconProps) => <Icon {...props} leftOpen />;
Icon.InfoCircle = (props: IconProps) => <Icon {...props} infoCircle />;
Icon.Maintenance = (props: IconProps) => <Icon {...props} maintenance />;
Icon.Menu = (props: IconProps) => <Icon {...props} menu />;
Icon.PdfDouble = (props: IconProps) => <Icon {...props} pdfDouble />;
Icon.Power = (props: IconProps) => <Icon {...props} power />;
Icon.RightOpen = (props: IconProps) => <Icon {...props} rightOpen />;
Icon.Search = (props: IconProps) => <Icon {...props} search />;
Icon.Settings = (props: IconProps) => <Icon {...props} settingsOutline />;
Icon.TooltipMessage = (props: IconProps) => <Icon {...props} tooltipMessage />;
Icon.Upload = (props: IconProps) => <Icon {...props} upload />;
Icon.Up = (props: IconProps) => <Icon {...props} upload />;
Icon.UpOpen = (props: IconProps) => <Icon {...props} upOpen />;
Icon.Transactions = (props: IconProps) => <Icon {...props} transactions />;
Icon.TrashEmpty = (props: IconProps) => <Icon {...props} trashEmpty />;
Icon.User = (props: IconProps) => <Icon {...props} user />;
Icon.Users = (props: IconProps) => <Icon {...props} users />;
