namespace lgt{

    /**
     * for循环节点
     * 从context中获取名为forName的局部变量
     * 循环right节点 直到满足forName变量到达forEnd
     * 每次循环后 forName变量 += forStep;
     */
    export class ForNode extends DefaultNode{

        public forName:GameFunction;
        public forStart:GameFunction;
        public forEnd:GameFunction;
        public forStep:GameFunction;

        private _index:number = NaN;

        public run(c:IGameContext):Promise<boolean>{
            const that = this;
            const tName = String(this.forName.getValue(c));
            const tStart = Number(this.forStart.getValue(c));
            const tEnd = Number(this.forEnd.getValue(c));
            const tStep = Number(this.forStep.getValue(c));
            if(isNaN(this._index)){
                this._index = tStart;
            }
            that.running = 1;
            return new Promise<boolean>((resolve,reject)=>{
                if(that._index >= tEnd){
                    that.running = 2;
                    //循环结束 清理掉变量
                    c.setLocal(tName,undefined);
                    resolve(true);
                }else{
                    // 当前context压入一个循环节点
                    c.nodeStack.push(that);
                    that._index += tStep;
                    // 将index存入context中
                    c.setLocal(tName,that._index);
                    resolve(false);
                }
            })
        }

        public reset():void{
            super.reset();
            this._index = NaN;
        }

    }
}
