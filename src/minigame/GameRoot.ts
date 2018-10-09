/*
* name;
*/
class GameRoot extends laya.display.Sprite{
    public static allUnits:Unit[] = [];

    private _units = [];
    constructor() {
        super();
        this.initUnits();
        Laya.timer.loop(500,this,this.onLoop);
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onClick)
    }

    onClick(e:Laya.Event){
        this._myUnit.moveTo(new Laya.Point(e.stageX,e.stageY));
    }

    onLoop(){
        this._units.forEach((u:Unit)=> {
            // u.moveTo(new Laya.Point(Math.random() * 500,Math.random() * 500));
            // u.patrol();
        });
    }

    private _myUnit:MyUnit;

    initUnits(){
        let m = new MyUnit();
        m.x = m.y = 100;
        this.addChild(m);
        this._myUnit = m;
        GameRoot.allUnits.push(m);

        for (var i = 0; i < 3; i++) {
            let u = new Unit();
            u.x = Math.random() * 500;
            u.y = Math.random() * 500;
            this.addChild(u);
            this._units.push(u);
            GameRoot.allUnits.push(u);  
        }
    }
}