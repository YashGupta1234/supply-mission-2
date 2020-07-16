class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0,
            friction:0,
            density:1.0
        }
        this.box=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.box);
    }
    display(){
        //var pos=this.body.position;
        var angle=this.box.angle;
        push ();
        translate(this.box.position.x,this.box.position.y);
        rotate (angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop ();
    }
  }