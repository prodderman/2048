import { IPosition, ITailInfo } from 'types';

class Tile {
  private static DEFAULT_VALUE = 2;
  private _isMoved: boolean = false;
  private _position: IPosition;
  private _prevPosition: IPosition | null;
  private _value: number;
  private _mergedFrom: Tile[] | null;

  constructor(position: IPosition, value?: number) {
    this._position = position;
    this._prevPosition = null;
    this._value = value || Tile.DEFAULT_VALUE;
    this._mergedFrom = null;
  }

  get tileInfo(): ITailInfo {
    return {
      value: this._value,
      position: { ...this._position },
      prevPosition: this._prevPosition ? { ...this._prevPosition } : null,
      mergedFrom: this._mergedFrom ? this._mergedFrom.map(tile => tile.tileInfo) : null,
    };
  }

  get value(): number {
    return this._value;
  }

  get position(): IPosition {
    return { ...this._position };
  }

  get isMoved(): boolean {
    return this._isMoved;
  }

  get isMerged(): boolean {
    return Boolean(this._mergedFrom);
  }

  public setPosition(position: IPosition) {
    if (!this.isEqualPosition(position)) {
      this._position = { ...position };
      this._isMoved = true;
    }
  }

  public savePosition() {
    this._prevPosition = { ...this._position };
    this._isMoved = false;
  }

  public setMergedFrom(firstTile: Tile, secondTile: Tile) {
    this._mergedFrom = [firstTile, secondTile];
  }

  public clearMerged() {
    this._mergedFrom = null;
  }

  private isEqualPosition(position: IPosition) {
    return this._position.x === position.x && this._position.y === position.y;
  }
}

export default Tile;
