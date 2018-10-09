var lgt;
(function (lgt) {
    /**
     * 游戏内函数提供器的集合 可扩展
     */
    lgt.GameFunctionProviders = [];
    /**
     * 内置的一些常用函数 如数学运算 常用工具函数等
     */
    var SystemProviders = [
        {
            funcName: "add",
            paramList: ["number", "number"],
            returnType: "number",
            desc: "求和 +",
            express: "({0} + {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return Number(a) + Number(b);
            }
        },
        {
            funcName: "sub",
            paramList: ["number", "number"],
            returnType: "number",
            desc: "求差 -",
            express: "({0} - {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return Number(a) - Number(b);
            }
        },
        {
            funcName: "dev",
            paramList: ["number", "number"],
            returnType: "number",
            desc: "求商 ÷",
            express: "({0} / {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                if (b == 0) {
                    return 0;
                }
                return Number(a) / Number(b);
            }
        },
        {
            funcName: "multi",
            paramList: ["number", "number"],
            returnType: "number",
            desc: "求积 x",
            express: "({0} * {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return Number(a) * Number(b);
            }
        },
        {
            funcName: "mod",
            paramList: ["number", "number"],
            returnType: "number",
            desc: "求模 %",
            express: "({0} % {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return Number(a) % Number(b);
            }
        },
        {
            funcName: "random",
            paramList: [],
            returnType: "number",
            desc: "取随机数（0 - 1）",
            express: "(Random[0,1])",
            func: function () {
                return Math.random();
            }
        },
        {
            funcName: "larger",
            paramList: ["number", "number"],
            returnType: "bool",
            desc: "大于 ＞",
            express: "({0} > {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                var res = Number(a) > Number(b);
                return res;
            }
        },
        {
            funcName: "smaller",
            paramList: ["number", "number"],
            returnType: "bool",
            desc: "小于 <",
            express: "({0} ＜ {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return Number(a) < Number(b);
            }
        },
        {
            funcName: "equal",
            paramList: ["number", "number"],
            returnType: "bool",
            desc: "等于 =",
            express: "({0} == {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return Number(a) == Number(b);
            }
        },
        {
            funcName: "notEqual",
            paramList: ["number", "number"],
            returnType: "bool",
            desc: "不等于 !=",
            express: "({0} != {1})",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return Number(a) != Number(b);
            }
        },
        {
            funcName: "toString",
            paramList: ["number"],
            returnType: "string",
            desc: "转换数字为字符串",
            express: "String({0})",
            func: function (arg) {
                var a = arg[0];
                return a.toString();
            }
        },
        {
            funcName: "toNumber",
            paramList: ["string"],
            returnType: "number",
            desc: "转换字符串为数字",
            express: "Number(‘{0}’)",
            func: function (arg) {
                var a = arg[0];
                return Number(a);
            }
        },
        {
            funcName: "appendStr",
            paramList: ["string", "string"],
            returnType: "string",
            desc: "字符串连接",
            express: "‘{0}’ + ‘{1}’",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                return String(a) + String(b);
            }
        },
        {
            funcName: "log",
            paramList: ["string"],
            returnType: "void",
            desc: "Log打印",
            express: "Print(‘{0}’)",
            func: function (arg) {
                var a = arg[0];
                console.log(a);
            }
        },
        {
            funcName: "setLocal",
            paramList: ["string", "string"],
            returnType: "void",
            desc: "设置局部变量",
            express: "设置局部变量 [{0}] = {1}",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                var c = this;
                c.setLocal(a, b);
            }
        },
        {
            funcName: "getLocal",
            paramList: ["string"],
            returnType: "any",
            desc: "获取局部变量",
            express: "局部变量[{0}]",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                var c = this;
                return c.getLocal(a);
            }
        },
        {
            funcName: "owner",
            paramList: [],
            returnType: "any",
            desc: "触发单位",
            express: "触发单位",
            func: function (arg) {
                var c = this;
                return c.owner;
            }
        },
        {
            funcName: "selectUnit",
            paramList: [],
            returnType: "any",
            desc: "当前选取单位",
            express: "选取单位",
            func: function (arg) {
                var c = this;
                return c.selectedUnit;
            }
        },
        {
            funcName: "matchedUnit",
            paramList: [],
            returnType: "any",
            desc: "当前匹配单位",
            express: "匹配单位",
            func: function (arg) {
                var c = this;
                return c.matchedUnit;
            }
        },
    ];
    lgt.GameFunctionProviders = lgt.GameFunctionProviders.concat(SystemProviders);
})(lgt || (lgt = {}));
//# sourceMappingURL=SystemProvider.js.map