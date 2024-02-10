export default class Button {
    constructor(txt, color, x, y) {
            this.txt = txt;
            this.color = color === 'white' ? 0xffffff : 0x000000;
            let style = new PIXI.TextStyle({
                fontFamily: 'Stylish',
                fontSize: 20,
                fill: color,
                stroke: color
            })
            let text = new PIXI.Text(txt, style);
            this.ctr = new PIXI.Container();
            this.timer = 0;
            this.ctr.x = x;
            this.ctr.y = y;
            this.ctr.interactive = true;
            this.ctr.buttonMode = true;
            //this.ctr.on('pointerdown', evt => this.onButtonDown(evt))
            text.anchor.set(0.5);
            let innerFrame = new PIXI.Graphics();
            innerFrame.lineStyle(3, this.color, 1);
            innerFrame.drawRoundedRect(6, 6, text.width + 12, 30, 7);
            let outerFrame = new PIXI.Graphics();
            outerFrame.lineStyle(3, this.color, 1);
            outerFrame.drawRoundedRect(0, 0, text.width + 24, 42, 12);
            let blur = new PIXI.filters.BlurFilter(0.2, 1, 0);
            blur.resolution = 10;
            innerFrame.filters = [blur];
            outerFrame.filters = [blur];
            text.x = innerFrame.width / 2 + 6;
            text.y = innerFrame.height / 2 + 4;
            this.ctr.addChild(outerFrame);
            this.ctr.addChild(innerFrame);
            this.ctr.addChild(text);
            //this.ctr.alpha = 0;
        }
        //onButtonDown() {
        // try to create the comment
        //}
    makeAppear() {
        if (this.ctr.alpha < 1) {
            this.ctr.alpha += 0.1;
        } else {
            return true;
        }
    }
}