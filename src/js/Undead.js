import Character from './Character';

export default class Undead extends Character {
    constructor(name, level) {
      super(name, level);
      this.type = 'undead';
      this.attack = 25;
      this.defence = 25;
    }
  }
  