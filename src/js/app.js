export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Неверный формат имени');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Неверный формат типа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Нельзя понизить здоровье умершего');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Bowerman {
  constructor(name) {
    super(name, 'Daemon');
  }
}

export class Undead extends Swordsman {
  constructor(name) {
    super(name, 'Undead');
  }
}

export class Zombie extends Magician {
  constructor(name) {
    super(name, 'Zombie');
  }
}
