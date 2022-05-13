import Character from './Character';

export default class Swordsman extends Character {
    constructor(name, level) {
      super(name, level);
      this.type = 'swordsman';
      this.attack = 40;
      this.defence = 10;
    }
  }