/** 
 * @typedef {Object<string, any>} Position
 * @property {number} x
 * @property {number} y
*/

class Tile {
  /** @const {Number} */
  static DEFAULT_VALUE = 2;
  
  /** @param {Position} position @param {number} value */
  constructor(position, value) {
    this._isMoved = false;
    /** 
     * @private
     * @type {Position | null} 
     */
    this._position = position;

    /** 
     * @private
     * @type {Position | null} 
     */
    this._prevPosition = null;

    /** 
     * @private
     * @property {number} value 
    */
    this._value = value || Tile.DEFAULT_VALUE;
    
    /** 
     * @private
     * @property {Array<Tile> | null} mergedFrom 
    */
    this._mergedFrom = null;
  }

  get tileInfo() {
    return {
      value: this._value,
      position: { ...this._position },
      prevPosition: this._prevPosition ? { ...this._prevPosition } : null,
      mergedFrom: this._mergedFrom ? this._mergedFrom.map(tile => tile.tileInfo) : null,
    }
  }

  get value() {
    return this._value;
  }

  get position() {
    return { ...this._position };
  }

  get isMoved() {
    return this._isMoved;
  }

  setPosition(position) {
    if (!this._isEqualPosition(position)) {
      this._position = { ...position };
      this._isMoved = true;
    }
  }

   /** 
   * @public
   * @return {void}
  */
  savePosition = () => {
    this._prevPosition = { ...this._position };
    this._isMoved = false;
  }

  /** 
   * @param {Tile} firstTile
   * @param {Tile} secondTile
   * @return {void}
  */
  setMergedFrom(firstTile, secondTile) {
    this._mergedFrom = [firstTile, secondTile];
  }

  clearMerged() {
    this._mergedFrom = null;
  }

  /** 
   * @param {Position} position
   * @return {Boolean}
  */
  _isEqualPosition(position) {
    return this._position.x === position.x && this._position.y === position.y;
  }
}

export default Tile;