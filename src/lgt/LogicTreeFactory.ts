namespace lgt{

    export class LogicTreeFactory{

        public static NODE_ID:number = 100;

        public static Default:number = 0;
        public static Selector:number = 1;
        public static IF:number = 2;
        public static For:number = 3;
        public static Delay:number = 4;

        public static fromJson(json:any):LogicTree{
            let t:LogicTree = new LogicTree();
            t.name = json["name"];
            t.root = LogicTreeFactory.createNode(json["root"]);
            return t;
        }

        private static createNode(json:any):ILogicNode{
            const t:number = Number(json["nodeType"]);
            let node:ILogicNode;
            if(t == LogicTreeFactory.Default){
                let dfNode = new DefaultNode();
                dfNode.action = LogicTreeFactory.createGameFunction(json["action"]);
                node = dfNode;
            }
            if(t == LogicTreeFactory.Selector){
                let stNode = new SelectorNode();
                stNode.filter = LogicTreeFactory.createGameFunction(json["filterCondition"]);
                node = stNode;
            }
            if(t == LogicTreeFactory.IF){
                let ifNode = new IfNode();
                ifNode.condition = LogicTreeFactory.createGameFunction(json["ifCondition"]);
                node = ifNode;
            }
            if(t == LogicTreeFactory.For){
                let forNode = new ForNode();
                forNode.forName = LogicTreeFactory.createGameFunction(json["forName"]);
                forNode.forStart = LogicTreeFactory.createGameFunction(json["forStart"]);
                forNode.forEnd = LogicTreeFactory.createGameFunction(json["forEnd"]);
                forNode.forStep = LogicTreeFactory.createGameFunction(json["forStep"]);
                node = forNode;
            }
            if(t == LogicTreeFactory.Delay){
                let dlNode = new DelayNode();
                dlNode.delay = LogicTreeFactory.createGameFunction(json["delay"]);
                node = dlNode;
            }
            if(!node){
                throw new Error(`未知类型的节点：${t}`);
            }
            let left = json["leftChild"];
            if(left){
                node.leftChild = LogicTreeFactory.createNode(left);
            }
            let right = json["rightChild"];
            if(right){
                node.rightChild = LogicTreeFactory.createNode(right);
            }
            return node;
        }

        private static createGameFunction(json:any):GameFunction{
            var gf:GameFunction = new GameFunction();
            gf.funcType = json["funcType"];
            gf.returnType = json["returnType"];
            gf.baseValue = json["baseValue"];
            gf.params = [];
            var parr:any[] = json["params"];
            if(parr.length > 0){
                for (var i:number = 0; i < parr.length; i++) 
                {
                    gf.params.push(LogicTreeFactory.createGameFunction(parr[i]));
                }
            }
            return gf;
        }

    }
}