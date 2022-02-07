export default class MathCharacter {
  static types = ['bowman', 'swordsman', 'magician', 'daemon', 'undead', 'zombie'];

  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!');
    } else {
      this.name = name;
    }
    if (!MathCharacter.types.includes(type)) {
      throw new Error('Ошибка! Неверный тип персонажа!');
    } else {
      this.type = type;
    }

    this.distance = 1;
    this._stoned = false;
    // this._attack = математический пример линейного падения;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    if (this._stoned) {
      this._attack = Math.round(this._attack - Math.log2(this.distance) * 5);
    } else {
      this._attack = value; // линейно падает???
    }
  }

  get attack() {
    return this._attack;
  }
}
