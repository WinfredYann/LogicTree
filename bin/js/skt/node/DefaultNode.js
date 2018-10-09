var lgt;
(function (lgt) {
    var DefaultNode = /** @class */ (function () {
        function DefaultNode() {
            /**运行状态 0 - 未运行 1 - 正在运行 2 -已经运行过 */
            this.running = 0;
            this.id = ++lgt.LogicTreeFactory.NODE_ID;
        }
        /**
         * 执行节点 返回一个带bool值结果的promise
         * 子类复写这个方法 实现不用的功能节点
         */
        DefaultNode.prototype.run = function (c) {
            var _this = this;
            var that = this;
            that.running = 1;
            return new Promise(function (resolve, reject) {
                if (_this.action) {
                    _this.action.getValue(c);
                }
                that.running = 2;
                resolve(true);
            });
        };
        DefaultNode.prototype.reset = function () {
            this.running = 0;
            var left = this.leftChild;
            var right = this.rightChild;
            if (left)
                left.reset();
            if (right)
                right.reset();
        };
        return DefaultNode;
    }());
    lgt.DefaultNode = DefaultNode;
})(lgt || (lgt = {}));
//# sourceMappingURL=DefaultNode.js.map