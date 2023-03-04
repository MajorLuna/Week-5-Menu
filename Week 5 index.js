class Player {
    constructor(name, species) {
        this.name = name;
        this.species = species;
}
    
    describe() {
        //console.log(`${this.name} is a ${this.species}`)
        return `${this.name} is a ${this.species}`;
    }
}
class Group {
    
    constructor(name) {
        this.name = name;
        this.players = [];
    }
    
addPlayer(player) {
    if (player instanceof Player) {
        this.players.push(player);
    } else {
        throw new Error(`You can only add an instance of Player. 
        argument is not a player: ${player}`);
    }
}
    
describe() {
    return `${this.name} is a  ${this.species.length} players.`;
    }
}
class Menu { 
    constructor() {
        this.Group = [];
        this.selectedGroup = null; 
    }
    
    start() { 
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
        switch(selection) {
        case '1' :
        
            this.createGroup();
            break;
        case '2' :
    
            this.viewGroup();
            break;
        case '3' :
    
            this.deleteGroup();
            break;
        case '4' :
    
            this.displayGroups();
            break;
        default:
            
            selection = 0;
        }
      selection = this.showMainMenuOptions();
   }
   alert('Ready for Battle!');
}
    
    
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create a new Group
            2) view a Group
            3) delete a Group
            4) display all Groups
        `);
    }


    showGroupMenuOptions(GroupInfo) {
        return prompt(`
            0) back
            1) create a new Player
            2) retire a Player
            
        ${GroupInfo}
    `);
    }
    
displayGroups() {
    let groupString = '';
        for (let i = 0; i < this.Group.length; i++) {
        groupString += i+ ') ' + this.group[i].name + '\n';
        }
    alert(groupString);
}
    
createGroup() {
    let name = prompt('Enter name for new Group: ');
    this.Group.push(new Group(name));
}
    
    displayGroup() {
        let index = prompt("Enter the index of the Group that you want to view:");
        if (index > -1 && index < this.Group.length) {
            this.selectedGroup = this.group[index];
            let description = 'Group Name: ' + this.selectedGroup.name + '\n';
            description += ' ' + this.selectedGroup.describe() + '\n ';
            for (let i = 0; i < this.selectedGroup.players.length; i++) {
            description += i + ') ' + this.selectedGroup.players[i].describe() + '\n';
        }
        let selection1 = this.showGroupMenuOptions(description);
        switch (selection1) {
            case '1' :
            this.createPlayer();
            break;
            case '2' :
            this.deletePlayer();
        } 
    }
}
    
    deleteGroup() {
        let index = prompt('Enter the index of the Group that you wish to delete: ');
        if (index > -1 && index < this.Group.length) {
            this.group.splice(index,1);
        }
    }
    
    
    createPlayer() {
        let name = prompt('Enter name for new player: ');
        let position = prompt('Enter species for new player: ');
        this.selectedGroup.addPlayer(new Player(name,species));
    }
    
    deletePlayer(){
        let index = prompt('Enter the index of the player that you wish to delete: ');
        if (index > -1 && index < this.selectedGroup.players.length) 
        { this.selectedTeam.players.splice(index,1);
        }
    }
}

    let menu = new Menu();
    menu.start();
