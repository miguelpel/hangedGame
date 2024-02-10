import PlayerStats from './PlayerStats';
// Object Player
// follows all the player's variables.

export default class Player {
    constructor(app) {
        this.rope = 0;
        this.moveableStep = 0;
        this.greenMoveableStep = 0;
        this.gallows = 0;
        this.gallowsWithView = 0;
        this.stats = new PlayerStats(app);
        this.stats.update(this);
        // the constructor will access the save file.
        ///////// saving game
        // let hangedsave = {
        //     ropes: value,
        //     gallows: value, (here object: with view: value, without view: value)
        //     movableSteps: value, (here object: green: value, normal : value)
        //     gameState: value,
        //     etc
        // }
        // localStorage.setItem("hangedsave",JSON.stringify(save));
        //////// loading game
        // let savegame = JSON.parse(localStorage.getItem("hangedsave"));
        // if (typeof savegame.ropes !== "undefined") ropes = savegame.ropes; 
        /////////
    }
    display() {
        console.log('Ropes: ' + this.rope);
        console.log('moveable Step: ' + this.moveableStep);
        console.log('green moveable step: ' + this.greenMoveableStep);
        console.log('gallows: ' + this.gallows);
        console.log('gallows with view: ' + this.gallowsWithView);
    }
}