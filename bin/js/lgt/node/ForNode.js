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
var lgt;
(function (lgt) {
    /**
     * for循环节点
     * 从context中获取名为forName的局部变量
     * 循环right节点 直到满足forName变量到达forEnd
     * 每次循环后 forName变量 += forStep;
     */
    var ForNode = /** @class */ (function (_super) {
        __extends(ForNode, _super);
        function ForNode() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._index = NaN;
            return _this;
        }
        ForNode.prototype.run = function (c) {
            var that = this;
            var tName = String(this.forName.getValue(c));
            var tStart = Number(this.forStart.getValue(c));
            var tEnd = Number(this.forEnd.getValue(c));
            var tStep = Number(this.forStep.getValue(c));
            if (isNaN(this._index)) {
                this._index = tStart;
            }
            that.running = 1;
            return new Promise(function (resolve, reject) {
                if (that._index >= tEnd) {
                    that.running = 2;
                    //循环结束 清理掉变量
                    c.setLocal(tName, undefined);
                    resolve(true);
                }
                else {
                    // 当前context压入一个循环节点
                    c.nodeStack.push(that);
                    that._index += tStep;
                    // 将index存入context中
                    c.setLocal(tName, that._index);
                    resolve(false);
                }
            });
        };
        ForNode.prototype.reset = function () {
            _super.prototype.reset.call(this);
            this._index = NaN;
        };
        return ForNode;
    }(lgt.DefaultNode));
    lgt.ForNode = ForNode;
})(lgt || (lgt = {}));
//# sourceMappingURL=ForNode.js.map