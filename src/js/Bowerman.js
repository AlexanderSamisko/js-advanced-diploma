import Character from './Character';

export default class Bowerman extends Character {
    constructor(name, level) {
      super(name, level);
      this.type = 'bowman';
      this.attack = 25;
      this.defence = 25;
    }
  }