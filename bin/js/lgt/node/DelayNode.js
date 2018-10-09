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
    var DelayNode = /** @class */ (function (_super) {
        __extends(DelayNode, _super);
        function DelayNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DelayNode.prototype.run = function (c) {
            var that = this;
            that.running = 1;
            return new Promise(function (resolve, reject) {
                var d = that.delay.getValue(c);
                Laya.timer.once(d, that, function () {
                    that.running = 2;
                    resolve(true);
                });
            });
        };
        return DelayNode;
    }(lgt.DefaultNode));
    lgt.DelayNode = DelayNode;
})(lgt || (lgt = {}));
//# sourceMappingURL=DelayNode.js.map