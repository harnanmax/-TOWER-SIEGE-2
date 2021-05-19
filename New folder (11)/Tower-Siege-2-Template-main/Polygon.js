class Polygon{
  constructor(x,y,width,height) {
    var options
    {isStatic:false}
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world, this.body);
    this.image = loadImage("polygon.png");
    this.width = width;
    this.height = height;
    }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
 
  image(this.image,this.body.position.x,this.body.position.y,30,30)
  

}
};
