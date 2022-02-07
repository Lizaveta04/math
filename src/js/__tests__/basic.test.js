import MathCharacter from '../basic';

test('name shouldn`t contain less than 2 symbols', () => {
  expect(() => new MathCharacter('F', 'bowman')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('name shouldn`t contain more than 10 symbols', () => {
  expect(() => new MathCharacter('slvnsmskjs;mslemfe', 'bowman')).toThrow(new Error('Ошибка! Имя персонажа должно быть длиной от 2 до 10 символов!'));
});

test('invalid type', () => {
  expect(() => new MathCharacter('Лучник', 'bowerman')).toThrow(new Error('Ошибка! Неверный тип персонажа!'));
});
