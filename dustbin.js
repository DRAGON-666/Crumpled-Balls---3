class Dustbin {
  constructor(x, y,  height,angle) {
    
    var options = {
      isStatic:true,
        
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);

    this.width = 20;
    
    this.height = height;

    this.image = loadImage("sprites/dustbingreen.png");
    
    Matter .Body.setAngle(this.body,angle);

    World.add(world, this.body);

    

  }
  display(){
    var pos =this.body.position;

    var angle =this.body.angle;
    
    console.log(angle);

    push ();

    translate(pos.x,pos.y);

    rotate(angle);

    imageMode(CENTER);

    fill('white');

    image(this.image, 0, 0, this.width, this.height);
        

    pop ();
    
  }




}
  
