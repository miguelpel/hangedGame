import Button from './Button';
import Comment from './Comment';

export default class Step {
    constructor(step, contenant, game) {
        game.currentStepStatus = 'running';
        this.buttons = [];
        this.comments = [];
        this.animation = step.animation || 0;
        //this.animations = [];
        this.goTo = -1;
        if (step.goTo) this.goTo = step.goTo;
        if (step.comments) {
            this.comments = step.comments;
            let cmts = [];
            this.comments.forEach(function(comment) {
                let cmt = new Comment(comment.text, step.color, 0, 0);
                cmt.timer = Number(comment.wait) * 60;
                cmts.push(cmt);
                //contenant.addChild(cmt.ctr);
            });
            this.comments = cmts;
            game.currentStepStatus = 'running';
        }
        if (step.buttons) {
            this.buttons = step.buttons;
            let btns = [];
            this.buttons.forEach(function(button) {
                let btn = new Button(button.text, step.color, 0, 0);
                if (button.wait) btn.timer = Number(button.wait) * 60;
                btn.ctr.on('pointerdown', function(evt) {
                    // create an object with:
                    // step: the destination step
                    // rope: 1 // add 1 to ropes.
                    // greenMovingStep : 1 // add 1 to greenMovingStep
                    // gallows : 1 // add 1 to galllows
                    // gallowsWithView : 1 /// add 1 to gallows with view.
                    let returnDetails = {
                        step: -1,
                        addRope: 0,
                        addMoveableStep: 0,
                        addGreenMoveableStep: 0,
                        addGallows: 0,
                        addGallowsWithView: 0
                    };
                    returnDetails.step = button.onclick.goTo;
                    returnDetails.addRope = button.onclick.addRope;
                    returnDetails.addMoveableStep = button.onclick.addMoveableStep;
                    returnDetails.addGreenMoveableStep = button.onclick.addGreenMoveableStep;
                    returnDetails.addGallows = button.onclick.addGallows;
                    returnDetails.addGallowsWithView = button.onclick.addGallowsWithView;
                    //
                    // return this object.
                    //console.log("button pushed!");
                    game.pushButton(returnDetails);
                });
                btns.push(btn);
                //console.log("button construction done!");
            });
            this.buttons = btns;
            game.currentStepStatus = 'waiting';
        }
    }
}

// les bouttons disparaissent (tous) quand ils sont cliqués.