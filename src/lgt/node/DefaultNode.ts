namespace lgt{

    export class DefaultNode implements ILogicNode{

        public id:number;

        public parent:ILogicNode;

        public leftChild:ILogicNode;

        public rightChild:ILogicNode;

        public action:GameFunction;

        /**运行状态 0 - 未运行 1 - 正在运行 2 -已经运行过 */
        public running:number = 0;

        constructor(){
            this.id = ++ LogicTreeFactory.NODE_ID;
        }

        /**
         * 执行节点 返回一个带bool值结果的promise
         * 子类复写这个方法 实现不用的功能节点
         */
        public run(c:IGameContext):Promise<boolean>{
            const that = this;
            that.running = 1;
            return new Promise<boolean>((resolve,reject)=>{
                if(this.action){
                    this.action.getValue(c);
                }
                that.running = 2;
                resolve(true);
            })
        }

        public reset():void{
            this.running = 0;
            let left = this.leftChild;
            let right = this.rightChild;
            if(left)left.reset();
            if(right)right.reset();
        }
        
    }
}
