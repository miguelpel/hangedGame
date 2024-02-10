import Button from './Button.js';
import Comment from './Comment.js';
import Step from './Step.js';
import Game from './Game.js';

// Aliases
// let Application = PIXI.Application,
//     Container = PIXI.Container,
//     loader = PIXI.loader,
//     resources = PIXI.loader.resources,
//     TextureCache = PIXI.utils.TextureCache,
//     Sprite = PIXI.Sprite,
//     Rectangle = PIXI.Rectangle,
//     Text = PIXI.Text,
//     TextStyle = PIXI.TextStyle,
//     Graphics = PIXI.Graphics;

// Creation of PIXI application
let app = new PIXI.Application({
    width: 0,
    height: 0,
    antialias: true
});
app.renderer.backgroundColor = 0x000000;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.displey = "block";
app.renderer.autoresize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

// The JSON call

function loadData() {
    var xhr = getXMLHttpRequest();

    // Chargement du fichier
    xhr.open("GET", 'scripts/hangedIncData.json', false);
    xhr.send(null);
    if (xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
        throw new Error("Impossible de charger les data (code HTTP : " + xhr.status + ").");
    let mapJsonData = xhr.responseText;

    // Analyse des données
    let mapData = JSON.parse(mapJsonData);
    return mapData;
}
let data = loadData();
console.log(data.scene1.gameState);
//////////

///// The actual game loop

/// variables
let steps = [{
    buttons: [{
        text: "BUY A ROPE",
        onclick: {
            goTo: 1,
            addRope: 1,
            addGreenMoveableStep: 1,
            addGallows: 1
        }
    }],
    color: 'white'

}, {
    comments: [{
        text: "You buy a rope.",
        wait: 3
    }],
    color: 'white',
}];
let game = new Game(steps, app);

app.ticker.add(delta => gameLoop(delta));

function gameLoop(delta) {
    if (game.currentStepStatus === 'waiting') {
        return;
    } else if (game.currentStepStatus === 'done') {
        if (steps[game.currentStepNumber] !== undefined) {
            game.changeStepTo(game.currentStepNumber)
        } else {
            return;
        }
    } else if (game.currentStepStatus === 'running') {
        if (game.timer > 0) game.timer -= 1;
        if (game.timer === 0) {
            game.actualizeStep();
        }
    }
}