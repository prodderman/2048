class Grid {
  constructor(size) {
    this._size = size;
    this._grid = this.createGrid(size);
  }

  get items() {
    return this._grid.filter(cell => Boolean(cell));
  }

  eachCell(callback) {
    this._grid.forEach(callback);
  }

  createGrid(size) {
    return Array(size * size).fill(null);
  }

  getItem(position) {
    if (this.isPositionValid(position)) {
      const index = this._indexByPosition(position);
      return this._grid[index];
    }

    return null;
  }

  insertItem(item, position) {
    this._grid[this._indexByPosition(position)] = item;
  }

  removeItem(position) {
    this._grid[this._indexByPosition(position)] = null;
  }

  moveItem(fromPosition, toPosition) {
    if (this.isPositionValid(fromPosition) && this.isPositionValid(toPosition)) {
      const from = this._indexByPosition(fromPosition);
      const to = this._indexByPosition(toPosition);
      const item = this._grid[from];
      this._grid[from] = null;
      this._grid[to] = item;
    }
  }

  getAvailableCells() {
    return this._grid
      .map((_, index) => index)
      .filter(index => this._grid[index] === null);
  }

  getRandomAvailableCell() {
    const availableCells = this.getAvailableCells();
    if (availableCells.length > 0) {
      const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)]
      return this._positionByIndex(randomIndex);
    }

    return null;
  }

  isPositionValid(position) {
    return position.x >= 0 && position.x < this._size &&
         position.y >= 0 && position.y < this._size;
  }

  isCellAvailable(position) {
    return !Boolean(this.getItem(position))
  }

  _indexByPosition(position) {
    return position.y * this._size + position.x;
  }

  _positionByIndex(index) {
    return {
      x: index % this._size,
      y: Math.floor(index / this._size),
    }
  }
}

export default Grid;
