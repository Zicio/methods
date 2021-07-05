import * as classes from '../app';

test('class Bowerman', () => {
  const expectedAttack = 25;
  const expectedDefence = 25;
  const expectedName = 'Bob';
  const newClass = new classes.Bowerman('Bob', 'Bowman');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  const receivedName = newClass.name;
  expect(receivedName).toBe(expectedName);
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('class Magician', () => {
  const expectedAttack = 10;
  const expectedDefence = 40;
  const newClass = new classes.Magician('Bob', 'Magician');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('class Swordsman', () => {
  const expectedAttack = 40;
  const expectedDefence = 10;
  const newClass = new classes.Swordsman('Bob', 'Swordsman');
  const receivedAttack = newClass.attack;
  const receivedDefence = newClass.defence;
  expect(receivedAttack).toBe(expectedAttack);
  expect(receivedDefence).toBe(expectedDefence);
});

test('throws on name', () => {
  expect(() => {
    const newClass = new classes.Swordsman('B', 'Swordsman');
  }).toThrowError(new Error('Неверный формат имени'));
  expect(() => {
    const newClass = new classes.Swordsman('Bobanecvoer', 'Swordsman');
  }).toThrowError(new Error('Неверный формат имени'));
});

test('throws on type', () => {
  expect(() => {
    const newClass = new classes.Swordsman('Bob', 'Sworde');
  }).toThrowError(new Error('Неверный формат типа'));
});

test('levelUp in case health = 100', () => {
  const newClass = new classes.Bowerman('Bob', 'Bowman');
  newClass.levelUp();
  const expectedLevel = 2;
  const expectedAttack = 30;
  const expectedDefence = 30;
  const expectedHealth = 100;
  expect(newClass.level).toBe(expectedLevel);
  expect(newClass.attack).toBe(expectedAttack);
  expect(newClass.defence).toBe(expectedDefence);
  expect(newClass.health).toBe(expectedHealth);
});

test('levelUp in case health = 0', () => {
  expect(() => {
    const newClass = new classes.Swordsman('Bob', 'Bowman');
    newClass.health = 0;
    newClass.levelUp();
  }).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('damage in case health = 100', () => {
  const newClass = new classes.Bowerman('Bob', 'Bowman');
  newClass.damage(2);
  const expectedHealth = 98.5;
  expect(newClass.health).toBe(expectedHealth);
});

test('damage in case health = 0', () => {
  expect(() => {
    const newClass = new classes.Swordsman('Bob', 'Bowman');
    newClass.health = -1;
    newClass.damage(2);
  }).toThrowError(new Error('Нельзя понизить здоровье умершего'));
});
