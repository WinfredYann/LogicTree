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
var MyUnit = /** @class */ (function (_super) {
    __extends(MyUnit, _super);
    function MyUnit() {
        var _this = _super.call(this) || this;
        _this.speed = 0.2;
        return _this;
    }
    MyUnit.prototype.draw = function () {
        var g = this.graphics;
        g.drawCircle(0, 0, 10, "#11ff11");
    };
    MyUnit.prototype.createAI = function () {
    };
    MyUnit.prototype.onUpdateAi = function () {
    };
    return MyUnit;
}(Unit));
//# sourceMappingURL=MyUnit.js.map