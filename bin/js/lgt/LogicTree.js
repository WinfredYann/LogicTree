var lgt;
(function (lgt) {
    var LogicTree = /** @class */ (function () {
        function LogicTree() {
            this.isRunning = false;
            this.name = "";
        }
        LogicTree.prototype.play = function () {
            this.isRunning = true;
            this.playNode(this.root);
        };
        LogicTree.prototype.reset = function () {
            this.root.reset();
        };
        LogicTree.prototype.playNode = function (n) {
            if (n) {
                var that_1 = this;
                n.run(this.context).then(function (b) {
                    var next = b ? n.leftChild : n.rightChild;
                    that_1.playNode(next);
                });
            }
            else {
                this.onPlayEnd();
            }
        };
        LogicTree.prototype.onPlayEnd = function () {
            var n = this.context.nodeStack.pop();
            if (n) {
                //发现循环节点 从循环节点处再次执行
                this.playNode(n);
            }
            else {
                this.isRunning = false;
                this.reset();
            }
        };
        return LogicTree;
    }());
    lgt.LogicTree = LogicTree;
})(lgt || (lgt = {}));
//# sourceMappingURL=LogicTree.js.map