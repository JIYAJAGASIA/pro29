const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var polygon;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(300,275,200,10);
    polygon=new poly(200,200,20,290);
    box1=new box(200,200,30,40);
    box2=new box(200,200,30,40);
    box3=new box(200,200,30,40);
    box4=new box(200,200,30,40);
    box5=new box(200,200,30,40);
    box6=new box(200,200,30,40);
    box7=new box(200,200,30,40);
    box8=new box(330,235,30,40);
    box9=new box(360,235,30,40);
    box10=new box(390,235,30,40);
    box11=new box(420,235,30,40);
    box12=new box(450,235,30,40);
    box13=new box(360,195,30,40);
    box14=new box(390,195,30,40);
    box15=new box(420,195,30,40);
    box16=new box(450,195,30,40);
}
function draw(){
   
    rectMode(CENTER);
  background("brown");

    ground.display();
    polygon.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    Engine.update(engine);
    
}


function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(polygon.body,polygon.body.position,{x:85,y:-105});
  
    }
}


function mouseReleased(){
    slingshot.fly();
    
}


