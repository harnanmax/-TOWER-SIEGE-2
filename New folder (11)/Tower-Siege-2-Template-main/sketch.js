const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   ground1=new Ground(480,385,1000,30);

   ground2=new Ground(385,262,230,15);
   ground3=new Ground(600,160,150,15);


        box1=new  Box(600,52,30,40);

        box2=new  Box(630,92,30,40);
        box3=new  Box(600,92,30,40);
        box4=new  Box(570,92,30,40);

        box5=new  Box(660,132,30,40);
        box6=new  Box(630,132,30,40);
        box7=new  Box(600,132,30,40);
        box8=new  Box(570,132,30,40);
        box9=new  Box(540,132,30,40); 
            
        box24=new  Box(375,110,30,40);

        box10=new  Box(390,155,30,40);
        box23=new  Box(360,155,30,40);

        box11=new  Box(395,195,30,40);
        box12=new  Box(390,195,30,40);
        box13=new  Box(360,195,30,40);
        box21=new  Box(325,195,30,40);
        box22=new  Box(410,195,30,40);

        box20=new  Box(315,235,30,40);
        box19=new  Box(325,235,30,40);
        box18=new  Box(355,235,30,40);
        box17=new  Box(390,235,30,40);
        box16=new  Box(410,235,30,40);
        box15=new  Box(440,235,30,40);
        box14=new  Box(470,235,30,40);

        polygon=new  Polygon(50,50,25,25); 
        World.add(world,polygon);
         
        slingshot=new Slingshot(polygon.body,{x:110,y:100})

}

        function draw(){
            background("black");
            Engine.update(engine);
            ground1.display();
            ground2.display();
            ground3.display();

            
            fill("blue");
            box1.display();

            fill("red");
            box2.display();
            box3.display();
            box4.display();
            
            fill("pink");
            box5.display();
            box6.display();
            box7.display();
            box8.display();
            box9.display();


            fill("blue");
            box24.display();

            fill("pink");
            box10.display();
            box23.display();

            fill("red");
            box11.display();
            box12.display();
            box13.display();
            box21.display();
            box22.display();

            fill("grey");
            box14.display();
            box15.display();
            box16.display();
            box17.display();
            box18.display();
            box19.display();
            box20.display();
            
            polygon.display();
            slingshot.display();
            drawSprites();
          }
 

  
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  
  }
  
  function mouseReleased(){
      slingshot.fly()
    
    }
    function keyPressed(){
      if(keyCode===32){

      slingshot.attach(polygon.body);
    }
      }
    