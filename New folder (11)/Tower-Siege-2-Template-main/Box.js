class Box  {
  constructor(x,y,width,height) {
    var options = {
       isStatic:false,
          }
        this.width = width;
        this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

    this.visibility=255;
  }
  display(){
    var pos =this.body.position;
    if(this.body.speed<3){
      rect(pos.x, pos.y, this.width, this.height);
      rectMode(CENTER);
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility-=5;
       tint(255,this.visibility);    
        pop();
    }
 
  }
};

