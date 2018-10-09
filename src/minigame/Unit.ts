/*
* name;
*/
import Tween = Laya.Tween;
class Unit extends laya.display.Sprite{
    private _aiTree:LogicTree;

    public range:number = 100;
    public speed:number = 0.05;

    constructor() {
        super();
        this.draw();
        this.createAI();
        Laya.timer.loop(200,this,this.onUpdate);
    }

    onUpdate(){
        this.onUpdateAi();

        const st = this._seekTarget
        if(st){
            this.moveTo(new Laya.Point(st.x,st.y));
        }
    }

    protected createAI():void{
        this._aiTree = LogicTreeFactory.fromJson(GameMain.Json);
        let c = new GameContext();
        c.owner = this;
        this._aiTree.context = c;

    }

    protected onUpdateAi(){
        this._aiTree.play();
    }

    protected draw():void{
        const g = this.graphics;
        g.drawCircle(0,0,10,"#ff1111");
        g.drawCircle(0,0,this.range,undefined,"#cccccc");
    }

    private _moveTween:Tween;



    public moveTo(p:Laya.Point,h?:Laya.Handler):void{
        if(this._moveTween){
            this._moveTween.clear();
        }
        this._moveTween = Tween.to(this,{x:p.x,y:p.y},Unit.getDistance(p.x,p.y,this.x,this.y)/this.speed,null,h);
    }

    private path = [
        new Laya.Point(50,50),
        new Laya.Point(550,50),
        new Laya.Point(550,300),
        new Laya.Point(50,300),
    ];
    private _pIndex:number = 0;

    public patrol():void{
        console.log("patrol");
        if(this._seekTarget){
            this._seekTarget = undefined;
        }
        let p:Laya.Point = this.path[this._pIndex];
        this.moveTo(p,Laya.Handler.create(this,this.onSinglePatrolComp,null,false))
    }

    private stopMove():void{
        if(this._moveTween){
            this._moveTween.clear();
        }
    }

    private _seekTarget:Unit;

    public seek(unit:Unit):void{
        if(this._seekTarget == unit){
            return;
        }
        this._seekTarget = unit;
        console.log("seek");
        
    }

    onSinglePatrolComp(){
        this._pIndex ++;
        if(this._pIndex >= this.path.length){
            this._pIndex = 0;
        }
        this.patrol();
    }

    public static getDistance(startX: number, startY: number, targetX: number, targetY: number): number {
        const m: number = targetX - startX;
        const n: number = targetY - startY;
        return Math.sqrt(m * m + n * n);
    }
}
