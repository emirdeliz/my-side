import { centerVerticalAbsolute } from '@theme';
import styled from 'styled-components';

export const InputFile = styled.input.attrs({ type: 'file' })`
  display: none;
`;

interface UploadAreaProps {
  center?: boolean;
  input?: boolean;
  spaceBetween?: boolean;
  matchList?: boolean;
  border?: string;
  ignorePadding?: boolean;
}

const UPLOAD_AREA_MIN_HEIGHT = '50px';

export const UploadArea = styled.div<UploadAreaProps>`
  height: 100%;
  width: 100%;
  min-height: ${UPLOAD_AREA_MIN_HEIGHT};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: dashed 2px transparent;
  min-height: ${({ ignorePadding }) =>
    ignorePadding ? 0 : UPLOAD_AREA_MIN_HEIGHT};
  padding: ${({ theme, center, matchList, ignorePadding }) => {
    if (ignorePadding) {
      return 0;
    }

    if (matchList) {
      return `0 ${theme.padding.Xs}`;
    }

    if (center) {
      return `${theme.padding.Xs} ${theme.padding.Sm}`;
    }

    return theme.padding.Sm;
  }};
  flex-direction: ${({ center, spaceBetween }) =>
    center || spaceBetween ? 'row' : 'column'};
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  border-radius: ${({ theme }) => theme.radius.Xs};
  background-color: ${({ theme, matchList }) =>
    matchList ? 'transparent' : theme.colors.White};
`;

const UPLOAD_AREA_INPUT_MIN_WIDTH = '50px';

export const Container = styled.div<UploadAreaProps>`
  width: 100%;
  position: relative;

  ${({ theme, matchList, border }) =>
    matchList
      ? `
    border: ${border} 1px ${theme.colors.P2};
    border-radius: ${theme.radius.Sm};
    padding: ${matchList ? theme.padding.Xs : 0};
  `
      : ``};
`;

export const Input = styled.div<UploadAreaProps>`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: ${UPLOAD_AREA_INPUT_MIN_WIDTH};

  ${UploadArea} {
    border: dashed 1px
      ${({ theme, matchList }) => (matchList ? 'transparent' : theme.colors.N3)};
    border-radius: ${({ theme }) => theme.radius.Sm};
  }
`;

export const Icon = styled.div<UploadAreaProps>`
  ${({ theme, matchList }) =>
    matchList
      ? `
    ${centerVerticalAbsolute};
    right: 8px;
  `
      : `
    padding-left: ${theme.padding.Xs};
  `}
`;

const UPLOAD_AREA_LIST_MAX_HEIGHT = '250px';

export const List = styled.div<UploadAreaProps>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  max-height: ${UPLOAD_AREA_LIST_MAX_HEIGHT};
  margin-top: ${({ theme, matchList }) => (matchList ? 0 : theme.margin.Nm)};
  padding: ${({ theme, matchList }) =>
    matchList
      ? `0 ${theme.padding.Sm}`
      : `${theme.padding.Nm} ${theme.padding.Nm} ${theme.padding.Sm}`};
  border-radius: ${({ theme }) => theme.radius.Sm};

  ${({ theme, matchList }) =>
    matchList
      ? ``
      : `
    border: solid 1px ${theme.colors.P2};
  `};
`;
