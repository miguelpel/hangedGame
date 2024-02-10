export default class PlayerStats {
    constructor(app) {
            this.color = 0xffffff;
            this.style = new PIXI.TextStyle({
                fontFamily: 'Stylish',
                fontSize: 18,
                fill: this.color,
                stroke: this.color
            })
            this.txt = new PIXI.Text("Hello?", this.style);
            //this.txt.anchor.set(0.5);
            this.ctr = new PIXI.Container();
            this.ctr.x = 10;
            this.ctr.y = 100;
            // let outerFrame = new PIXI.Graphics();
            // outerFrame.lineStyle(2, this.color, 1);
            // outerFrame.drawRoundedRect(0, 0, this.txt.width + 24, 42, 12);
            // this.txt.x = outerFrame.width / 2;
            // this.txt.y = outerFrame.height / 2;
            // let blur = new PIXI.filters.BlurFilter(0.2, 1, 0);
            // blur.resolution = 10;
            // outerFrame.filters = [blur];
            // this.txt.x = outerFrame.width / 2 + 6;
            // this.txt.y = outerFrame.height / 2 + 4;
            //this.ctr.addChild(outerFrame);
            this.ctr.addChild(this.txt);
            //this.ctr.alpha = 0;
            app.stage.addChild(this.ctr);
        }
        //onButtonDown() {
        // try to create the comment
        //}
    update(player) {
        console.log('stats update called');
        let rope = player.rope;
        let moveableStep = player.moveableStep;
        let greenMoveableStep = player.greenMoveableStep;
        let gallows = player.gallows;
        let gallowsWithView = player.gallowsWithView;
        let text = "";
        if (rope) text += `ropes : ${rope}\n`;
        if (moveableStep) text += `moveable step : ${moveableStep}\n`;
        if (greenMoveableStep) text += `green moveable step : ${greenMoveableStep}\n`;
        if (gallows) text += `gallows : ${gallows}\n`;
        if (gallowsWithView) text += `gallows with view : ${gallowsWithView}`;
        this.txt.text = text;
        console.log(this.txt);
        //this.ctr.addChild(text);
        //this.ctr.addChild(this.txt);
    }

    makeAppear() {
        if (this.ctr.alpha < 1) {
            this.ctr.alpha += 0.1;
        } else {
            return true;
        }
    }
}