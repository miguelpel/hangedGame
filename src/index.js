import Player from './Player';
import Game from './Game';
import GameData from './GameData';

// Creation of PIXI application
const app = new PIXI.Application({
    width: 0,
    height: 0,
    antialias: true
});
app.renderer.backgroundColor = 0x000000;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.displey = "block";
app.renderer.autoresize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
// Put this later (in setup function) and the resizeFunct will call the rezise function of the game object.
document.body.appendChild(app.view);
console.log('call 1');
console.log(app);
///// The Loader

PIXI.loader.add("./assets/Background/Background2.png").load(setup);

///// The actual game loop

function setup() {
    let player = new Player(app);
    //const data = Data;
    //let steps = GameData.steps;
    let game = new Game(GameData, app, player);
    window.addEventListener("resize", evt => resizeFunct(evt));

    app.ticker.add(delta => gameLoop(delta));

    function gameLoop(delta) {
        game.actualize();
    }
}

function resizeFunct(e) {
    console.log('resized called');
    app.renderer.resize(window.innerWidth, window.innerHeight);
    game.resize(window.innerWidth, window.innerHeight);
}