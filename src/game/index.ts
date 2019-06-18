import { writable, Writable } from 'svelte/store';
import { times } from 'ramda';
import { bind } from 'decko';

import { Direction, IVector, Size, IPosition, ITailInfo } from 'types';

import Tile from './tile';
import Grid from './grid';

const VECTORS_MAP: Record<Direction, IVector> = {
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
};

class Game {
  private grid: Grid<Tile>;
  private size: Size;
  private startTilesCount: number = 2;
  private store!: Writable<ITailInfo[]>;

  constructor(size: Size = 4) {
    this.size = size;
    this.grid = new Grid(size);

    this.buildStore();
    this.startGame();
  }

  get tiles() {
    return { subscribe: this.store.subscribe };
  }

  @bind
  public move(direction: Direction) {
    const vector = this.getVector(direction);
    const traversals = this.buildTraversals(vector);

    this.prepareTiles();

    let hasAtLeastOneTileBeenMoved = false;
    traversals.x.forEach(x => {
      traversals.y.forEach(y => {
        const position = { x, y };
        const item = this.grid.getItem(position);

        if (item !== null) {
          const availablePosition = this.findAvailablePosition(position, vector);
          const nextPosition = this.getNextPosition(availablePosition, vector);
          const itemOnNextPosition = this.grid.getItem(nextPosition);

          if (
            itemOnNextPosition !== null &&
            itemOnNextPosition.value === item.value &&
            !itemOnNextPosition.isMerged
          ) {
            const mergedValue = itemOnNextPosition.value + item.value;
            const mergedTile = new Tile(nextPosition, mergedValue);
            mergedTile.setMergedFrom(item, itemOnNextPosition);
            this.grid.removeItem(position);
            this.grid.removeItem(nextPosition);
            this.grid.insertItem(mergedTile, nextPosition);
            item.setPosition(nextPosition);
          } else {
            this.moveTile(item, availablePosition);
          }

          if (!hasAtLeastOneTileBeenMoved && item.isMoved) {
            hasAtLeastOneTileBeenMoved = true;
          }
        }
      });
    });

    if (hasAtLeastOneTileBeenMoved) {
      this.addRandomTile();
      this.updateStore();
    }
  }

  private startGame() {
    this.addStartTiles();
    this.updateStore();
  }

  private addStartTiles() {
    for (let i = 0; i < this.startTilesCount; i++) {
      this.addRandomTile();
    }
  }

  private addRandomTile() {
    const randomAvailableCell = this.grid.getRandomAvailableCell();
    if (randomAvailableCell) {
      const value = Math.random() < 0.9 ? 2 : 4;
      const tile = new Tile(randomAvailableCell, value);
      this.grid.insertItem(tile, randomAvailableCell);
    }
  }

  private prepareTiles() {
    this.grid.eachCell(item => {
      if (item) {
        item.clearMerged();
        item.savePosition();
      }
    });
  }

  private moveTile(tile: Tile, nextPosition: IPosition) {
    this.grid.moveItem(tile.position, nextPosition);
    tile.setPosition(nextPosition);
  }

  private buildStore() {
    const tiles = this.grid.items;
    const tilesInfo = tiles.map(tile => tile.tileInfo);
    this.store = writable(tilesInfo);
  }

  private updateStore() {
    const tiles = this.grid.items;
    const tilesInfo = tiles.map(tile => tile.tileInfo);
    this.store.set(tilesInfo);
  }

  private getVector(direction: Direction): IVector {
    return VECTORS_MAP[direction];
  }

  private buildTraversals(vector: IVector) {
    const size = this.size;
    const x = times(i => vector.x === 1 ? (size - 1 - i) : i, size);
    const y = times(i => vector.y === 1 ? (size - 1 - i) : i, size);
    return { x, y };
  }

  private findAvailablePosition(position: IPosition, vector: IVector): IPosition {
    const nextPosition = this.getNextPosition(position, vector);
    const isNextPositionValid = this.grid.isPositionValid(nextPosition);
    const isNextCellAvailable = this.grid.isCellAvailable(nextPosition);

    return isNextPositionValid && isNextCellAvailable
      ? this.findAvailablePosition(nextPosition, vector)
      : position;
  }

  private getNextPosition(position: IPosition, vector: IVector): IPosition {
    return { x: position.x + vector.x, y: position.y + vector.y };
  }
}

export default Game;
