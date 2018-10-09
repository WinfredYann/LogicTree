namespace lgt{

    export interface IGameContext{
        
        /**
         * 获取所有可选择的对象
         */
        getAllUnits():any[];

        /**
         * 当前技能选中的单位集合
         */
        curSelectedUnits:any[];

        /**
         * 当前技能树的拥有者 / 触发玩家
         */
        owner:any;

        /**
         * 迭代器中选取的玩家
         */
        selectedUnit:any;

        /**
         * 迭代器中匹配的玩家
         */
        matchedUnit:any;

        /**
         * 嵌套节点的栈
         * 当tree里有循环结构的时候 当循环分支执行完 会检测栈里是否有待处理的循环node
         */
        nodeStack:ILogicNode[];

        /**
         * 设置局部变量
         * @param key 
         * @param value 
         */
        setLocal(key:string,value:any):void;

        /**
         * 获取局部变量
         * @param key 
         */
        getLocal(key):any


    }
}
