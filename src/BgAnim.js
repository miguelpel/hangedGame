import TWEEN from './Tween.js';

export default class BgAnim {
    constructor(app, ww, wh) {
        // PIXI.loader.add("./Background/Background2.png").load(setup);
        this.TWEEN = TWEEN;

        this.running = 'true';
        this.bg = new PIXI.Sprite(PIXI.loader.resources["./assets/Background/Background2.png"].texture);
        this.scale = (ww / this.bg.width) * 1.1;
        this.bg.anchor.set(0.5, 0.5);
        this.bg.x = ww / 2;
        this.middlePoint = wh - ((this.bg.height / 2) * this.scale);
        this.bg.y = this.middlePoint - 10;
        this.bg.scale.set(this.scale, this.scale);

        this.rectangle = new PIXI.Graphics();
        this.rectangle.beginFill(0xffffff);
        this.rectangle.drawRect(0, 0, ww, this.middlePoint);
        this.rectangle.endFill();
        app.stage.addChild(this.rectangle);
        app.stage.addChild(this.bg);

        this.bgAnimation1 = new TWEEN.Tween(this.bg).to({ y: 0 }, 1000).easing(this.TWEEN.Easing.Quartic.In);
        // pitit saut
        this.bgAnimation1Saut = new TWEEN.Tween(this.bg).to({ y: 8, x: (ww / 2 - 10), rotation: 0.019 }, 400).easing(this.TWEEN.Easing.Quadratic.Out);
        // left 1
        this.bgAnimation2 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2 - 10), rotation: 0.020 }, 300).easing(this.TWEEN.Easing.Quadratic.In);
        this.bgAnimation2swing = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2 - 10), rotation: 0.020 }, 600).easing(this.TWEEN.Easing.Quadratic.InOut);
        // center
        this.bgAnimation3 = new TWEEN.Tween(this.bg).to({ y: 1, x: (ww / 2), rotation: 0 }, 600).easing(this.TWEEN.Easing.Quadratic.In);
        // right 1
        this.bgAnimation4 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2 + 8), rotation: -0.016 }, 600).easing(this.TWEEN.Easing.Quadratic.Out);
        // center
        this.bgAnimation5 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2), rotation: 0 }, 600).easing(this.TWEEN.Easing.Quadratic.In);
        // left 2
        this.bgAnimation6 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2 - 5), rotation: 0.012 }, 600).easing(this.TWEEN.Easing.Quadratic.Out);
        // center
        this.bgAnimation7 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2), rotation: 0 }, 600).easing(this.TWEEN.Easing.Quadratic.In);
        // right 2
        this.bgAnimation8 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2 + 3), rotation: -0.008 }, 600).easing(this.TWEEN.Easing.Quadratic.Out);
        // center
        this.bgAnimation9 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2), rotation: 0 }, 600).easing(this.TWEEN.Easing.Quadratic.In);
        // left 3
        this.bgAnimation10 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2 - 2), rotation: 0.004 }, 600).easing(this.TWEEN.Easing.Quadratic.Out);
        // center
        this.bgAnimation11 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2), rotation: 0 }, 600).easing(this.TWEEN.Easing.Quadratic.In);
        // right 2
        this.bgAnimation12 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2 + 1), rotation: -0.001 }, 600).easing(this.TWEEN.Easing.Quadratic.Out);
        // center
        this.bgAnimation13 = new TWEEN.Tween(this.bg).to({ y: 0, x: (ww / 2), rotation: 0 }, 600).easing(this.TWEEN.Easing.Quadratic.In);
        //
        this.bgAnimation1.chain(this.bgAnimation1Saut);
        this.bgAnimation1Saut.chain(this.bgAnimation2);
        this.bgAnimation2.chain(this.bgAnimation3);
        this.bgAnimation2swing.chain(this.bgAnimation3);
        this.bgAnimation3.chain(this.bgAnimation4);
        this.bgAnimation4.chain(this.bgAnimation5);
        this.bgAnimation5.chain(this.bgAnimation6);
        this.bgAnimation6.chain(this.bgAnimation7);
        this.bgAnimation7.chain(this.bgAnimation8);
        this.bgAnimation8.chain(this.bgAnimation9);
        this.bgAnimation9.chain(this.bgAnimation10);
        this.bgAnimation10.chain(this.bgAnimation11);
        this.bgAnimation11.chain(this.bgAnimation12);
        this.bgAnimation12.chain(this.bgAnimation13);

        this.rectAnimation = new TWEEN.Tween(this.rectangle).to({ height: 0 }, 1000).easing(this.TWEEN.Easing.Quintic.In);
    }
    startAnimation(anim) {
        if (anim === 'hang') {
            // console.log('start animation');
            // console.log(this.scale);
            console.log('hang');
            this.bgAnimation1.start();
            this.rectAnimation.start();
        } else if (anim === 'swing') {
            this.bgAnimation2swing.start();
        } else {
            console.log('Not valid animation');
        }
    }
    update() {
        if (this.running) {
            //console.log('Animation Update called.');
            this.TWEEN.update();
        }
    }
    resize(width, height) {
        // there's a need to rethink all that here.
        this.scale = (width / this.bg.width) * 1.1;
        this.bg.scale.set(this.scale, this.scale);
        this.bg.x = width / 2;
        this.middlePoint = height - ((this.bg.height / 2) * this.scale);
        this.rectangle.width = width;
    }
}