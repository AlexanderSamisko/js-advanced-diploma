import Character from './Character';

export default class Vampire extends Character {
    constructor(name, level) {
      super(name, level);
      this.type = 'vampire';
      this.attack = 40;
      this.defence = 10;
    }
  }