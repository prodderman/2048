import { writable } from 'svelte/store';
import { times } from 'ramda';

import Tile from './tile';
import Grid from './grid';

const VECTORS_MAP = {
  up: { x: 0,  y: -1 },
  right: { x: 1,  y: 0 },
  down: { x: 0,  y: 1 },
  left: { x: -1, y: 0 },
}

class Game {
  constructor(size = 4) {
    this._size = size;
    this._grid = new Grid(size);
    this._startTilesCount = 2;

    this.buildStore();
    this.startGame();
  }

  get tiles() {
    return { subscribe: this._store.subscribe };
  }

  move = (direction) => {
    const vector = this.getVector(direction);
    const traversals = this.buildTraversals(vector);
    
    this.prepareTiles();
    
    let hasAtLeastOneTileBeenMoved = false;
    traversals.x.forEach(x => {
      traversals.y.forEach(y => {
        const position = { x, y };
        const item = this._grid.getItem(position);

        if (item !== null) {
          const availablePosition = this.findAvailablePosition(position, vector);
          const nextPosition = this.getNextPosition(availablePosition, vector);
          const itemOnNextPosition = this._grid.getItem(nextPosition);

          if (
            itemOnNextPosition !== null &&
            itemOnNextPosition.value === item.value &&
            !itemOnNextPosition.isMerged
          ) {
            const mergedValue = itemOnNextPosition.value + item.value;
            const mergedTile = new Tile(nextPosition, mergedValue);
            mergedTile.setMergedFrom(item, itemOnNextPosition);
            this._grid.removeItem(position);
            this._grid.removeItem(nextPosition);
            this._grid.insertItem(mergedTile, nextPosition);
            item.setPosition(nextPosition);
          } else {
            this.moveTile(item, availablePosition);
          }

          if (!hasAtLeastOneTileBeenMoved && item.isMoved) {
            hasAtLeastOneTileBeenMoved = true
          }
        }
      });
    });

    if (hasAtLeastOneTileBeenMoved) {
      this.addRandomTile();
      this.updateStore();
    }
  }

  startGame() {
    this.addStartTiles();
    this.updateStore();
  }

  addStartTiles() {
    const t1 = new Tile({x:0, y: 3}, 2);
    const t2 = new Tile({x:1, y: 3}, 2);
    const t3 = new Tile({ x: 2, y: 3 }, 4);
    this._grid.insertItem(t1, t1.position);
    this._grid.insertItem(t2, t2.position);
    this._grid.insertItem(t3, t3.position);
    // for (let i = 0; i < this._startTilesCount; i++) {
    //   this.addRandomTile();
    // }
  }

  addRandomTile() {
    const randomAvailableCell = this._grid.getRandomAvailableCell();
    if (randomAvailableCell) {
      const value = Math.random() < 0.9 ? 2 : 4;
      const tile = new Tile(randomAvailableCell, value);
      this._grid.insertItem(tile, randomAvailableCell);
    }
  }

  prepareTiles() {
    this._grid.eachCell(item => {
      if (item) {
        item.clearMerged();
        item.savePosition();
      }
    });
  }

  moveTile(tile, nextPosition) {
    this._grid.moveItem(tile.position, nextPosition);
    tile.setPosition(nextPosition);
  }

  buildStore() {
    const tiles = this._grid.items;
    const tilesInfo = tiles.map(tile => tile.tileInfo);
    this._store = writable(tilesInfo);
  }

  updateStore() {
    const tiles = this._grid.items;
    const tilesInfo = tiles.map(tile => tile.tileInfo);
    this._store.set(tilesInfo);
  }

  getVector(direction) {
    return VECTORS_MAP[direction];
  }

  buildTraversals(vector) {
    const size = this._size;
    const x = times(i => vector.x === 1 ? (size - 1 - i) : i, size);
    const y = times(i => vector.y === 1 ? (size - 1 - i) : i, size);
    return { x, y };
  }

  findAvailablePosition(position, vector) {
    const nextPosition = this.getNextPosition(position, vector);
    const isNextPositionValid = this._grid.isPositionValid(nextPosition);
    const isNextCellAvailable = this._grid.isCellAvailable(nextPosition);

    return isNextPositionValid && isNextCellAvailable
      ? this.findAvailablePosition(nextPosition, vector)
      : position;
  }

  getNextPosition(position, vector) {
    return { x: position.x + vector.x, y: position.y + vector.y };
  }
}

export default Game;