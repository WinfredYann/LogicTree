var lgt;
(function (lgt) {
    var LogicTreeFactory = /** @class */ (function () {
        function LogicTreeFactory() {
        }
        LogicTreeFactory.fromJson = function (json) {
            var t = new lgt.LogicTree();
            t.name = json["name"];
            t.root = LogicTreeFactory.createNode(json["root"]);
            return t;
        };
        LogicTreeFactory.createNode = function (json) {
            var t = Number(json["nodeType"]);
            var node;
            if (t == LogicTreeFactory.Default) {
                var dfNode = new lgt.DefaultNode();
                dfNode.action = LogicTreeFactory.createGameFunction(json["action"]);
                node = dfNode;
            }
            if (t == LogicTreeFactory.Selector) {
                var stNode = new lgt.SelectorNode();
                stNode.filter = LogicTreeFactory.createGameFunction(json["filterCondition"]);
                node = stNode;
            }
            if (t == LogicTreeFactory.IF) {
                var ifNode = new lgt.IfNode();
                ifNode.condition = LogicTreeFactory.createGameFunction(json["ifCondition"]);
                node = ifNode;
            }
            if (t == LogicTreeFactory.For) {
                var forNode = new lgt.ForNode();
                forNode.forName = LogicTreeFactory.createGameFunction(json["forName"]);
                forNode.forStart = LogicTreeFactory.createGameFunction(json["forStart"]);
                forNode.forEnd = LogicTreeFactory.createGameFunction(json["forEnd"]);
                forNode.forStep = LogicTreeFactory.createGameFunction(json["forStep"]);
                node = forNode;
            }
            if (t == LogicTreeFactory.Delay) {
                var dlNode = new lgt.DelayNode();
                dlNode.delay = LogicTreeFactory.createGameFunction(json["delay"]);
                node = dlNode;
            }
            if (!node) {
                throw new Error("\u672A\u77E5\u7C7B\u578B\u7684\u8282\u70B9\uFF1A" + t);
            }
            var left = json["leftChild"];
            if (left) {
                node.leftChild = LogicTreeFactory.createNode(left);
            }
            var right = json["rightChild"];
            if (right) {
                node.rightChild = LogicTreeFactory.createNode(right);
            }
            return node;
        };
        LogicTreeFactory.createGameFunction = function (json) {
            var gf = new lgt.GameFunction();
            gf.funcType = json["funcType"];
            gf.returnType = json["returnType"];
            gf.baseValue = json["baseValue"];
            gf.params = [];
            var parr = json["params"];
            if (parr.length > 0) {
                for (var i = 0; i < parr.length; i++) {
                    gf.params.push(LogicTreeFactory.createGameFunction(parr[i]));
                }
            }
            return gf;
        };
        LogicTreeFactory.NODE_ID = 100;
        LogicTreeFactory.Default = 0;
        LogicTreeFactory.Selector = 1;
        LogicTreeFactory.IF = 2;
        LogicTreeFactory.For = 3;
        LogicTreeFactory.Delay = 4;
        return LogicTreeFactory;
    }());
    lgt.LogicTreeFactory = LogicTreeFactory;
})(lgt || (lgt = {}));
//# sourceMappingURL=LogicTreeFactory.js.map