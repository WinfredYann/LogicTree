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
var Tween = Laya.Tween;
var Unit = /** @class */ (function (_super) {
    __extends(Unit, _super);
    function Unit() {
        var _this = _super.call(this) || this;
        _this.range = 100;
        _this.speed = 0.05;
        _this.path = [
            new Laya.Point(50, 50),
            new Laya.Point(550, 50),
            new Laya.Point(550, 300),
            new Laya.Point(50, 300),
        ];
        _this._pIndex = 0;
        _this.draw();
        _this.createAI();
        Laya.timer.loop(200, _this, _this.onUpdate);
        return _this;
    }
    Unit.prototype.onUpdate = function () {
        this.onUpdateAi();
        var st = this._seekTarget;
        if (st) {
            this.moveTo(new Laya.Point(st.x, st.y));
        }
    };
    Unit.prototype.createAI = function () {
        this._aiTree = LogicTreeFactory.fromJson(GameMain.Json);
        var c = new GameContext();
        c.owner = this;
        this._aiTree.context = c;
    };
    Unit.prototype.onUpdateAi = function () {
        this._aiTree.play();
    };
    Unit.prototype.draw = function () {
        var g = this.graphics;
        g.drawCircle(0, 0, 10, "#ff1111");
        g.drawCircle(0, 0, this.range, undefined, "#cccccc");
    };
    Unit.prototype.moveTo = function (p, h) {
        if (this._moveTween) {
            this._moveTween.clear();
        }
        this._moveTween = Tween.to(this, { x: p.x, y: p.y }, Unit.getDistance(p.x, p.y, this.x, this.y) / this.speed, null, h);
    };
    Unit.prototype.patrol = function () {
        console.log("patrol");
        if (this._seekTarget) {
            this._seekTarget = undefined;
        }
        var p = this.path[this._pIndex];
        this.moveTo(p, Laya.Handler.create(this, this.onSinglePatrolComp, null, false));
    };
    Unit.prototype.stopMove = function () {
        if (this._moveTween) {
            this._moveTween.clear();
        }
    };
    Unit.prototype.seek = function (unit) {
        if (this._seekTarget == unit) {
            return;
        }
        this._seekTarget = unit;
        console.log("seek");
    };
    Unit.prototype.onSinglePatrolComp = function () {
        this._pIndex++;
        if (this._pIndex >= this.path.length) {
            this._pIndex = 0;
        }
        this.patrol();
    };
    Unit.getDistance = function (startX, startY, targetX, targetY) {
        var m = targetX - startX;
        var n = targetY - startY;
        return Math.sqrt(m * m + n * n);
    };
    return Unit;
}(laya.display.Sprite));
//# sourceMappingURL=Unit.js.map