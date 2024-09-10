import { buildMargin, buildPadding } from '@theme';
import styled from 'styled-components';
import { ColProps } from './Col';

const breakpoints = {
  MobileS: '320px',
  MobileM: '375px',
  MobileL: '425px',
  Tablet: '768px',
  Laptop: '1024px',
  Desktop: '1440px',
};

const ColSizeBase = {
  S1: 8.333333,
  S2: 16.666667,
  S3: 25,
  S4: 33.333333,
  S5: 41.666667,
  S6: 50,
  S7: 58.333333,
  S8: 66.666667,
  S9: 75,
  S10: 83.333333,
  S11: 91.666667,
  S12: 100,
};

const ColQuerySize = {
  MobileS: {
    C1: ColSizeBase.S12,
    C2: ColSizeBase.S12,
    C3: ColSizeBase.S12,
    C4: ColSizeBase.S12,
    C5: ColSizeBase.S12,
    C6: ColSizeBase.S12,
    C7: ColSizeBase.S12,
    C8: ColSizeBase.S12,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  MobileM: {
    C1: ColSizeBase.S6,
    C2: ColSizeBase.S6,
    C3: ColSizeBase.S12,
    C4: ColSizeBase.S12,
    C5: ColSizeBase.S12,
    C6: ColSizeBase.S12,
    C7: ColSizeBase.S12,
    C8: ColSizeBase.S12,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  MobileL: {
    C1: ColSizeBase.S6,
    C2: ColSizeBase.S6,
    C3: ColSizeBase.S6,
    C4: ColSizeBase.S6,
    C5: ColSizeBase.S6,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S12,
    C8: ColSizeBase.S12,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  Tablet: {
    C1: ColSizeBase.S3,
    C2: ColSizeBase.S3,
    C3: ColSizeBase.S6,
    C4: ColSizeBase.S3,
    C5: ColSizeBase.S6,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S6,
    C8: ColSizeBase.S6,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  Laptop: {
    C1: ColSizeBase.S1,
    C2: ColSizeBase.S2,
    C3: ColSizeBase.S3,
    C4: ColSizeBase.S4,
    C5: ColSizeBase.S5,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S7,
    C8: ColSizeBase.S8,
    C9: ColSizeBase.S9,
    C10: ColSizeBase.S10,
    C11: ColSizeBase.S11,
    C12: ColSizeBase.S12,
  },
  Desktop: {
    C1: ColSizeBase.S1,
    C2: ColSizeBase.S2,
    C3: ColSizeBase.S3,
    C4: ColSizeBase.S4,
    C5: ColSizeBase.S5,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S7,
    C8: ColSizeBase.S8,
    C9: ColSizeBase.S9,
    C10: ColSizeBase.S10,
    C11: ColSizeBase.S11,
    C12: ColSizeBase.S12,
  },
};

export const Col = styled.div<ColProps>`
  min-height: 1px;

  @media only screen and (max-width: ${breakpoints.MobileS}) {
    ${({ mobiles }) => {
      const size = mobiles ? ColQuerySize.Tablet[`C${mobiles}`] : undefined;
      return size ? `flex: 0 0 ${size}%; max-width: ${size}%;` : '';
    }}
  }
  @media only screen and (max-width: ${breakpoints.MobileM}) {
    ${({ mobilem }) => {
      const size = mobilem ? ColQuerySize.Tablet[`C${mobilem}`] : undefined;
      return size ? `flex: 0 0 ${size}%; max-width: ${size}%;` : '';
    }}
  }
  @media only screen and (max-width: ${breakpoints.MobileL}) {
    ${({ mobilel }) => {
      const size = mobilel ? ColQuerySize.Tablet[`C${mobilel}`] : undefined;
      return size ? `flex: 0 0 ${size}%; max-width: ${size}%;` : '';
    }}
  }
  @media only screen and (max-width: ${breakpoints.Tablet}) {
    ${({ tablet }) => {
      const size = tablet ? ColQuerySize.Tablet[`C${tablet}`] : undefined;
      return size ? `flex: 0 0 ${size}%; max-width: ${size}%;` : '';
    }}
  }
  @media only screen and (max-width: ${breakpoints.Laptop}) {
    ${({ laptop }) => {
      const size = laptop ? ColQuerySize.Tablet[`C${laptop}`] : undefined;
      return size ? `flex: 0 0 ${size}%; max-width: ${size}%;` : '';
    }}
  }
  @media only screen and (max-width: ${breakpoints.Desktop}) {
    ${({ desktop }) => {
      const size = desktop ? ColQuerySize.Tablet[`C${desktop}`] : undefined;
      return size ? `flex: 0 0 ${size}%; max-width: ${size}%;` : '';
    }}
  }

  ${({ auto, de }) => {
    if (auto) {
      return `
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      `;
    } else {
      return de ? `flex: 0 0 ${ColSizeBase[`S${de}`]}%` : '';
    }
  }};
  ${buildMargin()}
  ${buildPadding()}
  box-sizing: border-box;
`;
