export default class Team {
    constructor(){
        this.personnel = [];    
    }

    add(character, index){
      this.personnel.push([character, index]);
    };

    addAll(...characters){
      [...characters].forEach(item => this.personel.push(item));
    }  
}