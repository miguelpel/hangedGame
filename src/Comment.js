export default class Comment {
    constructor(txt, color, x, y) {
        this.txt = txt;
        this.color = color === 'white' ? 0xffffff : 0x000000;
        let style = new PIXI.TextStyle({
            fontFamily: 'CabinSketch',
            fontSize: 24,
            fill: color,
            stroke: color
        })
        let text = new PIXI.Text(txt, style);
        this.timer = 0;
        this.ctr = new PIXI.Container();
        this.ctr.x = x;
        this.ctr.y = y;
        this.ctr.addChild(text);
        //this.ctr.alpha = 0;
    }
    makeAppear() {
        if (this.ctr.alpha < 1) {
            this.ctr.alpha += 0.1;
        } else {
            return true;
        }
    }
}