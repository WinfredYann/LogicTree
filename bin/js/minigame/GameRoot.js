var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        var _this = _super.call(this) || this;
        _this._units = [];
        _this.initUnits();
        Laya.timer.loop(500, _this, _this.onLoop);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, _this, _this.onClick);
        return _this;
    }
    GameRoot.prototype.onClick = function (e) {
        this._myUnit.moveTo(new Laya.Point(e.stageX, e.stageY));
    };
    GameRoot.prototype.onLoop = function () {
        this._units.forEach(function (u) {
            // u.moveTo(new Laya.Point(Math.random() * 500,Math.random() * 500));
            // u.patrol();
        });
    };
    GameRoot.prototype.initUnits = function () {
        var m = new MyUnit();
        m.x = m.y = 100;
        this.addChild(m);
        this._myUnit = m;
        GameRoot.allUnits.push(m);
        for (var i = 0; i < 3; i++) {
            var u = new Unit();
            u.x = Math.random() * 500;
            u.y = Math.random() * 500;
            this.addChild(u);
            this._units.push(u);
            GameRoot.allUnits.push(u);
        }
    };
    GameRoot.allUnits = [];
    return GameRoot;
}(laya.display.Sprite));
//# sourceMappingURL=GameRoot.js.map