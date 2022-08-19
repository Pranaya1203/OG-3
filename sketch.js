var penguin, penguin_dancing, penguinImg, penguin_walking;
var obstacle, obstacle1, obstacle2, obstacle3;
var obstaclesGroup;
var ground, groundImg;
var backgroundImg;

function preload(){
    backgroundImg = loadImage("Antarctica.jpg");
    penguinImg = loadImage("")
    penguin_walking = loadAnimation("P1.png","P2.png","P3.png");
}

function setup () {
    createCanvas(windowWidth,windowHeight);
    penguin = createSprite(60,height-60,60,60);
    penguin.addAnimation("walking",penguin_walking);
}

function draw() {
    background("violet");
    drawSprites();
}