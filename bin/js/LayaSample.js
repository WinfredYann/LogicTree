var LogicTreeFactory = lgt.LogicTreeFactory;
var LogicTree = lgt.LogicTree;
var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400, WebGL);
        this.testTree();
    }
    GameMain.prototype.testTree = function () {
        // //停止事件冒泡，提高性能，当然也可以不要
        // e.stopPropagation();
        // //舞台被点击后，使用对象池创建子弹
        // let flyer: Laya.Sprite = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
        // flyer.pos(Laya.stage.mouseX, Laya.stage.mouseY);
        // this._gameBox.addChild(flyer);
        Laya.loader.load("ai.json", Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onError), Laya.Loader.JSON);
        console.log("加载ai.json！");
    };
    GameMain.prototype.onError = function () {
    };
    GameMain.prototype.onLoaded = function () {
        console.log("加载ai.json 完毕！");
        var json = Laya.loader.getRes("ai.json");
        // var tree:LogicTree = LogicTreeFactory.fromJson(json);
        // tree.context = new GameContext();
        // tree.play();
        GameMain.Json = json;
        lgt.GameFunctionProviders = lgt.GameFunctionProviders.concat(EX.unitProvider);
        console.log(JSON.stringify({ "gfp": lgt.GameFunctionProviders }));
        Laya.stage.addChild(new GameRoot());
    };
    return GameMain;
}());
var GameContext = /** @class */ (function () {
    function GameContext() {
        this.curSelectedUnits = [];
        this.nodeStack = [];
        this.map = {};
    }
    GameContext.prototype.getAllUnits = function () {
        return GameRoot.allUnits;
    };
    GameContext.prototype.setLocal = function (key, value) {
        this.map[key] = value;
    };
    GameContext.prototype.getLocal = function (key) {
        return this.map[key];
    };
    return GameContext;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map