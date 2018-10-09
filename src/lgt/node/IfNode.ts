namespace lgt{
    /**
     * 条件节点
     * 根据condition表达式的返回结果，判断走left或right
     */
    export class IfNode extends DefaultNode{

        public condition:GameFunction;

        public run(c:IGameContext):Promise<boolean>{
            const that = this;
            that.running = 1;
            return new Promise<boolean>((resolve,reject)=>{
                let b = false;
                if(that.condition){
                    b = that.condition.getValue(c);
                }
                that.running = 2;
                resolve(b);
            })
        }

    }
}
