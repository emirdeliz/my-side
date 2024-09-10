export enum FontWeight {
  Regular = '400',
  Medium = '500',
  Semibold = '600',
}

export interface FontWeightProps {
  fw1?: boolean;
  fw2?: boolean;
  fw3?: boolean;
}

export const getFontWeight = ({ fw1, fw2, fw3 }: FontWeightProps) => {
  switch (true) {
    case fw1:
      return FontWeight.Regular;
    case fw2:
      return FontWeight.Medium;
    case fw3:
      return FontWeight.Semibold;
    default:
      return FontWeight.Regular;
  }
};
