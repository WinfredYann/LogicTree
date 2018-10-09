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
     * 条件节点
     * 根据condition表达式的返回结果，判断走left或right
     */
    var IfNode = /** @class */ (function (_super) {
        __extends(IfNode, _super);
        function IfNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IfNode.prototype.run = function (c) {
            var that = this;
            that.running = 1;
            return new Promise(function (resolve, reject) {
                var b = false;
                if (that.condition) {
                    b = that.condition.getValue(c);
                }
                that.running = 2;
                resolve(b);
            });
        };
        return IfNode;
    }(lgt.DefaultNode));
    lgt.IfNode = IfNode;
})(lgt || (lgt = {}));
//# sourceMappingURL=IfNode.js.map