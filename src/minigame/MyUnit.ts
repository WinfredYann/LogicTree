/*
* name;
*/
class MyUnit extends Unit{
    constructor() {
        super();
        this.speed = 0.2;
    }

    protected draw():void{
        const g = this.graphics;
        g.drawCircle(0,0,10,"#11ff11");
    }

    protected createAI():void{

    }

    protected onUpdateAi(){
        
    }
}