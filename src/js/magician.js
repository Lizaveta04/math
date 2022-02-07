import MathCharacter from './basic';

export default class Magician extends MathCharacter {
  constructor(name, type) {
    super(name, type = 'magician');
    this._attack = 50;
  }
}
