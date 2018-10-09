namespace lgt{

    export class GameFunction {

        /**
         * 函数类型
         * 基本类型：number bool string 直接转换成对应类型
         * 函数类型：Function 根据 baseValue 获取Provider函数 执行表达式后取值
         */
        public funcType:string = "";

        public returnType:string = "any";

        public params:GameFunction[] = [];

        public baseValue:any;

        public getValue(context:IGameContext):any{
            const type = this.funcType;
            const t = this.returnType;
            if(type == "func"){
                return this.ExecuteFunction(context);
            }
            switch(t){
                case "number":
                    return Number(this.baseValue);
                case "bool":
                    return String(this.baseValue) == "true";
                case "string":
                case "any":
                    return String(this.baseValue);
            }
        }

        private ExecuteFunction(context:IGameContext):any{
            const f:Function = GetFunctionBy(this.baseValue);
            if(f){
                let args = [];
                const parr = this.params;
                for (let i = 0; i < parr.length; i++) {
                    const p = parr[i];
                    args.push(p.getValue(context))
                }
                return f.call(context,args);
            }else{
                console.error(`函数：${this.baseValue} 未注册！`);
            }
        }
    }


    export function GetFunctionBy(f:string):Function{
        let gfs = GameFunctionProviders;
        for (let i = 0; i < gfs.length; i++) {
            const g = gfs[i];
            if(g.funcName == f){
                return g.func;
            }
        }
        return undefined;
    }
}