import { Size, IPosition } from 'types';

class Grid<Item> {
  private size: Size;
  private grid: Array<Item | null>;

  constructor(size: Size) {
    this.size = size;
    this.grid = this.createGrid(size);
  }

  get items(): Item[] {
    return this.grid.filter(cell => cell !== null) as Item[];
  }

  public eachCell(callback: (item: Item | null) => void) {
    this.grid.forEach(callback);
  }

  public getItem(position: IPosition) {
    if (this.isPositionValid(position)) {
      const index = this.indexByPosition(position);
      return this.grid[index];
    }

    return null;
  }

  public insertItem(item: Item, position: IPosition) {
    this.grid[this.indexByPosition(position)] = item;
  }

  public removeItem(position: IPosition) {
    this.grid[this.indexByPosition(position)] = null;
  }

  public moveItem(fromPosition: IPosition, toPosition: IPosition) {
    if (this.isPositionValid(fromPosition) && this.isPositionValid(toPosition)) {
      const from = this.indexByPosition(fromPosition);
      const to = this.indexByPosition(toPosition);
      const item = this.grid[from];
      this.grid[from] = null;
      this.grid[to] = item;
    }
  }

  public getRandomAvailableCell(): IPosition | null {
    const availableCells = this.getAvailableCells();
    if (availableCells.length > 0) {
      const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
      return this.positionByIndex(randomIndex);
    }

    return null;
  }

  public isPositionValid(position: IPosition): boolean {
    return position.x >= 0 && position.x < this.size &&
         position.y >= 0 && position.y < this.size;
  }

  public isCellAvailable(position: IPosition): boolean {
    return !Boolean(this.getItem(position));
  }

  private getAvailableCells(): number[] {
    return this.grid
      .map((_, index) => index)
      .filter(index => this.grid[index] === null);
  }

  private createGrid(size: Size): null[] {
    return Array(size * size).fill(null);
  }

  private indexByPosition(position: IPosition): number {
    return position.y * this.size + position.x;
  }

  private positionByIndex(index: number): IPosition {
    return {
      x: index % this.size,
      y: Math.floor(index / this.size),
    };
  }
}

export default Grid;
