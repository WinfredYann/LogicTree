namespace lgt{
    /**
     * 选择器节点 
     * 从context中获取到的所有单位进行筛选 将满足条件的单位赋值给context中的curSelectedUnits
     * 每遍历一个单位，都会执行一次right节点（包括right的子节点），遍历结束后，执行left
     */
    export class SelectorNode extends DefaultNode{

        public filter:GameFunction;

        private _tmpSelected = [];

        public run(c:IGameContext):Promise<boolean>{
            const that = this;
            that.running = 1;

            if(this._tmpSelected == undefined){
                //筛选
                let all = c.getAllUnits();
                let f = this.filter;
                let tmp = [];
                c.curSelectedUnits = [];
                all.forEach((e)=> {
                    //赋值 当前context中选择的对象
                    c.selectedUnit = e;
                    if(f && f.getValue(c) ){
                        tmp.push(e);
                        c.curSelectedUnits.push(e);
                    }
                });
                this._tmpSelected = tmp;
            }

            return new Promise<boolean>((resolve,reject)=>{
                let u = that._tmpSelected.pop();
                if(u){
                    // 赋值到当前context匹配单位
                    c.matchedUnit = u;
                    // 当前context压入一个循环节点
                    c.nodeStack.push(that);
                    resolve(false);
                }else{
                    resolve(true); 
                }
            })
        }

        public reset():void{
            super.reset();
            this._tmpSelected = undefined
        }

    }
}
