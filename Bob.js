class Bob{
    constructor(x,y,radius){
        var bob_options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,radius,bob_options);
        this.radius=radius;
        World.add(world,this.body);
    }

    display(){
        strokeWeight(4);
        stroke("black")
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}