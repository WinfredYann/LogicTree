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
     * 选择器节点
     * 从context中获取到的所有单位进行筛选 将满足条件的单位赋值给context中的curSelectedUnits
     * 每遍历一个单位，都会执行一次right节点（包括right的子节点），遍历结束后，执行left
     */
    var SelectorNode = /** @class */ (function (_super) {
        __extends(SelectorNode, _super);
        function SelectorNode() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._tmpSelected = [];
            return _this;
        }
        SelectorNode.prototype.run = function (c) {
            var that = this;
            that.running = 1;
            if (this._tmpSelected == undefined) {
                //筛选
                var all = c.getAllUnits();
                var f_1 = this.filter;
                var tmp_1 = [];
                c.curSelectedUnits = [];
                all.forEach(function (e) {
                    //赋值 当前context中选择的对象
                    c.selectedUnit = e;
                    if (f_1 && f_1.getValue(c)) {
                        tmp_1.push(e);
                        c.curSelectedUnits.push(e);
                    }
                });
                this._tmpSelected = tmp_1;
            }
            return new Promise(function (resolve, reject) {
                var u = that._tmpSelected.pop();
                if (u) {
                    // 赋值到当前context匹配单位
                    c.matchedUnit = u;
                    // 当前context压入一个循环节点
                    c.nodeStack.push(that);
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        };
        SelectorNode.prototype.reset = function () {
            _super.prototype.reset.call(this);
            this._tmpSelected = undefined;
        };
        return SelectorNode;
    }(lgt.DefaultNode));
    lgt.SelectorNode = SelectorNode;
})(lgt || (lgt = {}));
//# sourceMappingURL=SelectorNode.js.map