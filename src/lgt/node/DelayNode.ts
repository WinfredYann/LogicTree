namespace lgt{
    export class DelayNode extends DefaultNode{

        public delay:GameFunction;

        public run(c:IGameContext):Promise<boolean>{
            const that = this;
            that.running = 1;
            return new Promise<boolean>((resolve,reject)=>{
                var d = that.delay.getValue(c);
                Laya.timer.once(d,that,()=>{
                    that.running = 2;
                    resolve(true);
                })
            })
        }

    }
}