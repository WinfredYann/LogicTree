var EX = /** @class */ (function () {
    function EX() {
    }
    EX.unitProvider = [
        {
            funcName: "curOwner",
            paramList: [],
            returnType: "Unit",
            desc: "当前持有对象",
            express: "(Owner)",
            func: function (arg) {
                var c = this;
                return c.owner;
            }
        },
        {
            funcName: "partrol",
            paramList: ["Unit"],
            returnType: "void",
            desc: "通知指定单位巡逻",
            express: "让{0}巡逻",
            func: function (arg) {
                var a = arg[0];
                a.patrol();
            }
        },
        {
            funcName: "seekUnit",
            paramList: ["Unit", "Unit"],
            returnType: "void",
            desc: "通知指定单位追踪目标",
            express: "让{0}追踪{1}",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                a.seek(b);
            }
        },
        {
            funcName: "isInRange",
            paramList: ["Unit", "Unit"],
            returnType: "bool",
            desc: "单位视野范围检测",
            express: "{0}在{1}的视野中",
            func: function (arg) {
                var a = arg[0];
                var b = arg[1];
                var dis = Unit.getDistance(a.x, a.y, b.x, b.y);
                return dis <= b.range;
            }
        },
        {
            funcName: "isPlayer",
            paramList: ["Unit"],
            returnType: "bool",
            desc: "指定单位是玩家",
            express: "{0}是玩家",
            func: function (arg) {
                var a = arg[0];
                return a instanceof MyUnit;
            }
        }
    ];
    return EX;
}());
//# sourceMappingURL=UnitProvider.js.map