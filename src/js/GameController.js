import generateTeam from "./generators";
import Bowerman from './Bowerman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Vampire from './Vampire';
import Undead from "./Undead";
import PositionedCharacter from './PositionedCharacter';
import GamePlay from "./GamePlay";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.showCellTooltip = this.gamePlay.showCellTooltip.bind(gamePlay);
  }

  init() {
    this.gamePlay.drawUi('prairie');
    let playerInitial = generateTeam([Bowerman, Swordsman], 1, 2);
    let aiInitial = generateTeam([Daemon, Undead, Vampire], 1, 2 );
    let characters = playerInitial.concat(aiInitial);
    let positions = []
    characters.forEach(item => {
      positions.push(new PositionedCharacter(item[0],item[1]))
    })
    this.gamePlay.redrawPositions(positions);
    this.gamePlay.addCellEnterListener(this.onCellEnter);
    
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
    
  }

  onCellEnter(index) {
    let cells = document.querySelectorAll(`.cell`);
    if (cells[index].firstChild && cells[index].firstChild.classList.contains("character")){
      let message = '';
      this.gamePlay.showCellTooltip(message, index);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
