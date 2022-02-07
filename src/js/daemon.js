import MathCharacter from './basic';

export default class Daemon extends MathCharacter {
  constructor(name, type) {
    super(name, type = 'daemon');
    this._attack = 50;
  }
}
