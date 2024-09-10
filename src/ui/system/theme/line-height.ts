export enum LineHeight {
  Xs = '12px',
  Sm = '16px',
  Nm = '20px',
  Lg = '24px',
  XL = '32px',
  XXL = '40px',
  XXXL = '48px',
}

export interface LineHeightProps {
  lh1?: boolean;
  lh2?: boolean;
  lh3?: boolean;
  lh4?: boolean;
  lh5?: boolean;
  lh6?: boolean;
  lh7?: boolean;
}

export const getLineHeight = ({
  lh1,
  lh2,
  lh3,
  lh4,
  lh5,
  lh6,
  lh7,
}: LineHeightProps) => {
  switch (true) {
    case lh1:
      return LineHeight.Xs;
    case lh2:
      return LineHeight.Sm;
    case lh3:
      return LineHeight.Nm;
    case lh4:
      return LineHeight.Lg;
    case lh5:
      return LineHeight.XL;
    case lh6:
      return LineHeight.XXL;
    case lh7:
      return LineHeight.XXXL;
    default:
      return LineHeight.Nm;
  }
};
