
namespace lgt{

    export interface ILogicNode{

        run(c:IGameContext):Promise<boolean>;

        running:number;
        
        reset():void;

        leftChild:ILogicNode;

        rightChild:ILogicNode;
    }
}