
namespace lgt{

    export class LogicTree{

        public root:ILogicNode;

        public isRunning:boolean = false;

        public context:IGameContext;

        public name:string = "";

        constructor(){
            
        }

        public play():void{
            this.isRunning = true;
            this.playNode(this.root);
        }

        public reset():void{
            this.root.reset();
        }

        protected playNode(n:ILogicNode):void{
            if(n){
                const that = this;
                n.run(this.context).then((b)=>{
                    let next = b ? n.leftChild : n.rightChild;
                    that.playNode(next);
                })
            }else{
                this.onPlayEnd();
            }
        }

        protected onPlayEnd(){
            let n = this.context.nodeStack.pop();
            if(n){
                //发现循环节点 从循环节点处再次执行
                this.playNode(n);
            }else{
                this.isRunning = false;
                this.reset();
            }
        }


    }
}