export type type = {
  color: string;
};

export type ColorListProps = {
  colors: Color[];
};

export type Color = {
  hex: string;
  weight: number;
};

export type SingleColorProps = {
  color: Color;
  index: number;
};
