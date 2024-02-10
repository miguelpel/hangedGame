import Step from './Step';
import BgAnim from './BgAnim';
//import { builtinModules } from 'module';

export default class Game {
    constructor(gameData, app, player) {
        //this.app = app;
        this.data = gameData;
        this.player = player;
        //this.animation = {};
        // How about the anim object gets another object as argument?
        this.animation = new BgAnim(app, window.innerWidth, window.innerHeight);
        //// here create new Player
        this.currentStepNumber = 0;
        this.currentStepStatus = 'done';
        this.act = 0;
        this.scene = 0;
        this.step = {};
        this.displayedComments = [];
        this.timer = 0;
        this.offset = 25;
        console.log(this.data.acts[0].scenes[0].animation);
        //this.animation = eval(this.data.acts[0].scenes[0].animation);
        this.container = new PIXI.Container();
        this.container.x = window.innerWidth / 2 - 100;
        this.container.y = window.innerHeight / 2;
        app.stage.addChild(this.container);
    }
    changeActTo(nbr) {
        // ideally, shold be a try and catch.
        if (this.data.acts[nbr]) {
            this.act = nbr;
            this.changeSceneTo(0);
        } else {
            console.log('End Game');
        }
    }
    changeSceneTo(nbr) {
        // build the animation
        if (this.data.acts[this.act].scenes[nbr]) {
            this.scene = nbr;
            // //this.animation = Object.create(this.data.acts[this.act].scenes[this.scene].animation);
            // console.log('trying to construct Animation');
            // this.animation = new BgAnim(app, window.innerWidth, window.innerHeight);
            // //this.animation = this.data.acts[this.act].scenes[this.scene].animation;
            // console.log(this.animation);
            this.changeStepTo(0);
        } else {
            this.changeActTo(this.act + 1);
        }
    }
    changeStepTo(nbr) {
        let stepnbr = nbr == "next" ? this.currentStepNumber + 1 : nbr;
        this.player.stats.update(this.player);
        //console.log("stepnbr = " + stepnbr);
        if (this.data.acts[this.act].scenes[this.scene].steps[stepnbr]) {
            this.currentStepNumber = stepnbr;
            this.step = new Step(this.data.acts[this.act].scenes[this.scene].steps[this.currentStepNumber], this.container, this);
            console.log('step created');
        } else {
            this.changeSceneTo(this.scene + 1)
        }
        this.currentStepStatus = 'running';
        console.log('running');
        console.log(this.step.animation);
        if (this.step.animation != undefined) {
            console.log('entered the step animation start function');
            //console.log(this.step.animation.action);
            this.animation.startAnimation(this.step.animation.action);
            this.timer = this.step.animation.wait * 60;
        }
        // console.log('number of buttons: ' + this.step.buttons.length);
        // console.log('number of comments: ' + this.step.comments.length);
    }
    actualizeStep() {
        if (typeof this.animation.update === "function") {
            //console.log('this.animation.update is function');
            this.animation.update();
        }
        //console.log('number of buttons in actualize: ' + this.step.buttons.length);
        // here is the meat:
        // look for the comments, then look for the buttons.
        if (this.step.comments.length > 0) {
            // there is at least one comment.
            // check id theree is a count down
            if (this.timer > 0 && this.currentStepStatus !== 'waiting') {
                // There is a count down.
                this.timer -= 1;
                // If the countdown is less than 50, move the comments up.
                if (this.timer < this.offset) this.moveCommentsUp();
            } else {
                // there's no countdown.
                // first, check if there's a timer for this comment.
                if (this.step.comments[0].timer > 0) this.timer = this.step.comments[0].timer;
                //  load the thing.
                this.addComment(this.step.comments);
            }
        } else {
            if (this.timer > 0 && this.currentStepStatus !== 'waiting') {
                //console.log('there is a button count down');
                // There is a count down.
                this.timer -= 1;
                // If the countdown is less than 50, move the comments up.
                if (this.timer < this.offset) this.moveCommentsUp();
            } else if (this.step.buttons.length > 0) {
                // display all the buttons,
                // and set the stepstate to waiting.
                let btnOffset = 0;
                this.step.buttons.forEach(button => {
                    // console.log(button.ctr.width);
                    if (button.timer) {
                        this.timer = button.timer || 0;
                    };
                    if (btnOffset + button.ctr.width > 400) {
                        btnOffset = 0;
                        button.ctr.y = this.offset * 2;
                    } else {
                        button.ctr.x = btnOffset;
                        btnOffset += button.ctr.width + this.offset;
                    }
                    this.container.addChild(button.ctr);
                    //if (this.timer <= 0) this.currentStepStatus = 'waiting';
                    this.currentStepStatus = 'waiting';
                });
            } else {
                //console.log('go to next step')
                // go to next step.
                //!!!and here!!!
                if (this.step.goTo > -1) {
                    this.changeStepTo(this.step.goTo);
                }
            }
        }
    }
    addComment(stepcommentslist) {
        // cut the first of the step comments and display it in the displayed comments.
        this.displayedComments.push(stepcommentslist.shift());
        this.container.addChild(this.displayedComments[this.displayedComments.length - 1].ctr);
    }
    moveCommentsUp() {
        this.displayedComments.forEach(comment => {
            let offset;
            if (this.timer > 10) offset = 2;
            else offset = 1;
            comment.ctr.y -= offset;
            comment.ctr.alpha -= 0.01;
            if (comment.ctr.alpha <= 0) {
                this.container.removeChild(comment.ctr);
                this.displayedComments.shift();
            }
        })
    }
    pushButton(returnObject) {
        this.player.rope += returnObject.addRope || 0;
        this.player.moveableStep += returnObject.addMoveableStep || 0;
        this.player.greenMoveableStep += returnObject.addGreenMoveableStep || 0;
        this.player.gallows += returnObject.addGallows || 0;
        this.player.gallowsWithView += returnObject.addGallowsWithView || 0;
        this.container.removeChildren(this.container.children.length - this.step.buttons.length);
        // here the documentation:
        //  removeChildren (this.children.length - buttons.length, this.children.length)
        console.log('step: ' + this.currentStepNumber);
        this.player.display();
        //!!!here!!!
        this.changeStepTo(returnObject.step);
    }
    actualize() {
        if (this.currentStepStatus === 'waiting') {
            return;
        } else if (this.currentStepStatus === 'done') {
            //game.currentStepNumber++;
            this.changeStepTo(this.currentStepNumber)
        } else if (this.currentStepStatus === 'running') {
            //console.log('call for actualize step');
            // animation.update inside the actualize step
            this.actualizeStep();
        }
    }
    resize(width, height) {
        this.animation.resize(width, height);
        this.container.x = window.innerWidth / 2 - 100;
        this.container.y = window.innerHeight / 2;
    }
}