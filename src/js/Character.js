export default class Character {
  constructor(name, level, type = 'generic') {
    this.name = name;
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    if(new.target.name == 'Character'){
      throw Error('Creating instance of Character is forbidden');
    };
  }
}