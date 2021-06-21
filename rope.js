class Rope
{
    constructor(body1,pointA){
    
        let options= {
            bodyA:body1,
            pointB:pointA,
        }

    this.pointA = pointA
    this.chain = Matter.Constraint.create(options)
    World.add(world,this.chain)
    }




show() {
push();
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointA.x,this.pointA.y)
pop();
}
}