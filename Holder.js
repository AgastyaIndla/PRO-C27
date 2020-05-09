class Holder {
    constructor(){
      var holder_options={
        isStatic:true
      }
      this.holder = Bodies.rectangle(400, 100, 400, 100, holder_options);
      
      World.add(world, this.holder);
    }
    display(){

      strokeWeight(4);
      stroke("white");
      fill("turquoise");
      rectMode(CENTER);
      rect(this.holder.position.x, this.holder.position.y,400,10);
      
    }
  };