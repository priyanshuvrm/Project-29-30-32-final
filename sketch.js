const Engine  = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,score = 0;
var backgroundImg;

function preload() {
    getBackgroundImg();
}

function setup(){
    createCanvas(1500,900);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(750,850,1500,30);
    box1 = new Box(1000,750);
    fill(0,0,200);
    box2 = new Box(900,750);
    fill(0,0,200);
    box3 = new Box(800,750);
    fill(0,0,200);
    box4 = new Box(700,750);
    fill(0,0,200);
    box5 = new Box(1100,750);
    fill(0,0,200);
    box6 = new Box(1200,750);
    fill(0,0,200);

    box7 = new Box(750,650);
    box8 = new Box(850,650);
    box9 = new Box(950,650);
    box10 = new Box(1050,650);
    box11 = new Box(1150,650);

    box12 = new Box(800,550);
    box13 = new Box(900,550);
    box14 = new Box(1000,550);
    box15 = new Box(1100,550);

    box16 = new Box(850,450);
    box17 = new Box(950,450);
    box18 = new Box(1050,450);

    box19 = new Box(900,350);
    box20 = new Box(1000,350);

    box21 = new Box(950,250);


    polygon = new Polygon(300,250);
    slingShot = new SlingShot(polygon.body , {x:300 , y:250})
}
function draw(){
    Engine.update(engine)

    if(backgroundImg)
    background(backgroundImg);


    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
    
    ground.display();
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
    box19.display();
    box20.display();
    box21.display();

    polygon.display();
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body , {x:mouseX , y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
if(keyCode===32){
    slingShot.attach(polygon.body)
}
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}