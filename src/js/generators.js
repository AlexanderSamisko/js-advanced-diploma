import Undead from './Undead';
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

 export function calculate(allowedTypes, maxLevel, nicknames) { 
  let type = allowedTypes[Math.floor(Math.random()*allowedTypes.length)];
  let nickname = nicknames[Math.floor(Math.random()*nicknames.length)];
  let level = Math.round(Math.random()*(maxLevel-1)+1);
  let char = new type(nickname,level); 
    if (char.level > 1) {
    char.health = 100;
    for ( k = 1; k < char.level; k += 1){
      let health = char.health;
      char.attack = +Math.max(char.attack, ((Math.sqrt(1)+0.6)*char.attack)).toFixed(); 
      char.defence = +Math.max(char.defence,     (Math.sqrt(char.health/health)+0.6)*char.defence).toFixed(); 
    }
  }
  return char        
}

export function defineIndex(forTeam, fromPositionPool){
  let index = +Math.floor(Math.random()*(fromPositionPool.length - 1));
  let duble = forTeam.findIndex(item => item[1] ==     fromPositionPool[index]);
  if (duble != -1) {
    return defineIndex(forTeam, fromPositionPool);
  }
  return fromPositionPool[index];
}

export function* characterGenerator(allowedTypes, maxLevel) {
  let nicknames = [
    'Ginsburg',
    'Malevich',
    'Garibalbi',
    'Ruthger',
    'Michel',
    'Lili',
    'Gvenevra',
    'Ariel',
    'Polumna',
    'Pocahontes',
    'Gastillio']
  yield calculate(allowedTypes, maxLevel, nicknames)
}

export default function generateTeam(allowedTypes, maxLevel, characterCount) {
  let team = [];
   let playerSide = [
    0, 8, 16, 24, 32, 40, 48, 56, 1, 9, 17, 25, 33, 41, 49, 57
  ];
  let aiSide = [
    6, 14, 22, 30, 38, 46, 54, 62, 7, 15, 23, 31, 39, 47, 55, 63
  ];
  for (let i = 0; i < characterCount; i += 1){
    let chargen = characterGenerator(allowedTypes, maxLevel);
    let char = chargen.next();    

    if (allowedTypes.includes(Undead)){
     let position = defineIndex(team, aiSide);
     team.push([char.value, position]);
    } else {
     let position = defineIndex(team, playerSide);
     team.push([char.value, position]);
    }
  }
  return team
}
