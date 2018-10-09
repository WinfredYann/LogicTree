import ILogicNode  = lgt.ILogicNode;
import LogicTreeFactory  = lgt.LogicTreeFactory;
import LogicTree  = lgt.LogicTree;
import WebGL = Laya.WebGL;
import IGameContext = lgt.IGameContext;
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400, WebGL);

        this.testTree();

        
    }


    testTree(): void {
        // //停止事件冒泡，提高性能，当然也可以不要
        // e.stopPropagation();
        // //舞台被点击后，使用对象池创建子弹
        // let flyer: Laya.Sprite = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
        // flyer.pos(Laya.stage.mouseX, Laya.stage.mouseY);
        // this._gameBox.addChild(flyer);

        Laya.loader.load("ai.json", Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onError), Laya.Loader.JSON);
        console.log("加载ai.json！");

    }

    onError(){

    }

    public static Json:JSON ;
    private onLoaded() {
        console.log("加载ai.json 完毕！");
        var json: JSON = Laya.loader.getRes("ai.json");
		// var tree:LogicTree = LogicTreeFactory.fromJson(json);
		// tree.context = new GameContext();
        // tree.play();
        GameMain.Json = json;

        lgt.GameFunctionProviders = lgt.GameFunctionProviders.concat(EX.unitProvider);
        console.log(JSON.stringify({"gfp":lgt.GameFunctionProviders}));
        
        Laya.stage.addChild(new GameRoot());
    }
}

class GameContext implements IGameContext {
	getAllUnits(): any[] {
		return GameRoot.allUnits;
	}
	curSelectedUnits: any[] = [];
	owner: any;
	selectedUnit: any;
	matchedUnit: any;
	nodeStack: ILogicNode[] = [];

	private map:any = {};
	setLocal(key: string, value: any): void {
		this.map[key] = value;
	}
	getLocal(key: any) {
		return this.map[key];
	}
}

new GameMain();