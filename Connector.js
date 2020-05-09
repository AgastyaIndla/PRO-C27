class Connector{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB,
            stiffness:0.04,
            length:100
        }
        this.pointA=pointA;
        this.string=Constraint.create(options);
        World.add(world,this.string);
    }

    display(){
        var pointA=this.pointA;
        var pointB=this.string.bodyB.position;
        push();
        strokeWeight(7);
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}