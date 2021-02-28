const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;


function setup() {
    createCanvas(1200, 400)
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,height,1200,20)
    stand1 = new Ground(300,230,240,20);
    stand2 = new Ground(810,170,240,20);
    box1 = new Box(255,215,40,50);
    box2 = new Box(285,215,40,50);
    box3 = new Box(310,215,40,50);
    box4 = new Box(340,215,40,50);
    box5 = new Box(265,180,40,50);
    box6 = new Box(295,180,40,50);
    box7 = new Box(325,180,40,50);
    box8 = new Box(275,130,40,50);
    box9 = new Box(310,130,40,50);

    box10 = new Box(760,145,40,50);
    box11 = new Box(790,145,40,50);
    box12 = new Box(820,145,40,50);
    box13 = new Box(850,145,40,50);
    box14 = new Box(770,105,40,50);
    box15 = new Box(800,105,40,50);
    box16 = new Box(830,105,40,50);
    box17 = new Box(780,75,40,50);
    box18 = new Box(815,75,40,50)

}

function draw() {
    background("black")
    text("Drag the hexagon using mouse towards blocks", 300,300);
    Engine.update(engine);

    ground1.display();
    stand1.display();
    stand2.display();
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
    box17.display();
    box18.display();
}