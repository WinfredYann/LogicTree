var lgt;
(function (lgt) {
    var GameFunction = /** @class */ (function () {
        function GameFunction() {
            /**
             * 函数类型
             * 基本类型：number bool string 直接转换成对应类型
             * 函数类型：Function 根据 baseValue 获取Provider函数 执行表达式后取值
             */
            this.funcType = "";
            this.returnType = "any";
            this.params = [];
        }
        GameFunction.prototype.getValue = function (context) {
            var type = this.funcType;
            var t = this.returnType;
            if (type == "func") {
                return this.ExecuteFunction(context);
            }
            switch (t) {
                case "number":
                    return Number(this.baseValue);
                case "bool":
                    return String(this.baseValue) == "true";
                case "string":
                case "any":
                    return String(this.baseValue);
            }
        };
        GameFunction.prototype.ExecuteFunction = function (context) {
            var f = GetFunctionBy(this.baseValue);
            if (f) {
                var args = [];
                var parr = this.params;
                for (var i = 0; i < parr.length; i++) {
                    var p = parr[i];
                    args.push(p.getValue(context));
                }
                return f.call(context, args);
            }
            else {
                console.error("\u51FD\u6570\uFF1A" + this.baseValue + " \u672A\u6CE8\u518C\uFF01");
            }
        };
        return GameFunction;
    }());
    lgt.GameFunction = GameFunction;
    function GetFunctionBy(f) {
        var gfs = lgt.GameFunctionProviders;
        for (var i = 0; i < gfs.length; i++) {
            var g = gfs[i];
            if (g.funcName == f) {
                return g.func;
            }
        }
        return undefined;
    }
    lgt.GetFunctionBy = GetFunctionBy;
})(lgt || (lgt = {}));
//# sourceMappingURL=GameFunction.js.map