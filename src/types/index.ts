export type Size = number;
export type Direction = 'up' | 'down' | 'right' | 'left';

export interface IPosition {
  x: number;
  y: number;
}

export interface IVector {
  x: 0 | 1 | -1;
  y: 0 | 1 | -1;
}

export interface ITailInfo {
  value: number;
  position: IPosition;
  prevPosition: IPosition | null;
  mergedFrom: ITailInfo[] | null;
}
