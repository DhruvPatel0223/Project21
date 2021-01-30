var canvas;
var music;

var obj1, obj2, obj3, obj4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    obj1 = createSprite(100, 580, 100, 20);
    obj1.shapeColor="green";
    obj2 = createSprite(250, 580, 100, 20);
    obj2.shapeColor="blue";
    obj3 = createSprite(400, 580, 100, 20);
    obj3.shapeColor="red";
    obj4 = createSprite(550, 580, 100, 20);
    obj4.shapeColor="yellow";


    //create box sprite and give velocity
    box = createSprite(random(20,750), 240, 20, 20);
    box.velocityX = 4;
    box.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge = createEdgeSprites();
    box.bounceOff(edge);

    box.bounceOff(obj1);
    box.bounceOff(obj2);
    box.bounceOff(obj3);
    box.bounceOff(obj4);
    


   
    //add condition to check if box touching surface and make it box
    if (isTouching(obj1, box) && bounceOff(obj1, box)) {
        box.shapeColor="green";
    }
    if (isTouching(obj2, box) && bounceOff(obj2, box)) {
        box.shapeColor="blue";
    }
    if (isTouching(obj3, box) && bounceOff(obj3, box)) {
        box.shapeColor="red";
    }
    if (isTouching(obj4, box) && bounceOff(obj4, box)) {
        box.shapeColor="yellow";
    }


    drawSprites();
}
