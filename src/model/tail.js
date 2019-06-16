/** 
 * @typedef {Object<string, any>} Position
 * @property {number} x
 * @property {number} y
*/

/** 
 * @typedef {Object<string, any>} TailInfo
 * @property {Position} position
 * @property {number} value
*/

class Tail {
  /** @const {Number} */
  static DEFAULT_VALUE = 2;
  
  /** @param {Position} position @param {number} value */
  constructor(position, value) {
    /** 
     * @private
     * @type {Position | null} 
     */
    this.position = position;

    /** 
     * @private
     * @type {Position | null} 
     */
    this.prevPosition = null;

    /** 
     * @private
     * @property {number} value 
    */
    this.value = value || Tail.DEFAULT_VALUE;
    
    /** 
     * @private
     * @property {Tail} mergedFrom 
    */
    this.mergedFrom = null;
  }

  /** 
   * @public
   * @return {TailInfo}
  */
  get tailInfo() {
    return {
      position: this.position,
      value: this.value,
    }
  }

  /** 
   * @public
   * @param {Position} position
   * @return {void}
  */
  setPosition = (position) => {
    this.position = { ...position };
  }

  /** 
   * @public
   * @return {void}
  */
  savePosition = () => {
    this.prevPosition = { ...this.position };
  }

  /** 
   * @public
   * @param {Tail} tail
   * @return {void}
  */
  mergeWith = (tail) => {
    this.mergedFrom = tail;
  }
}

export default Tail;