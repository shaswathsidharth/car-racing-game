var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var Car1img,Car2img,Car3img,Car4img,ground,track;

function preload(){
Car1img=loadImage("images/car1.png");
Car2img=loadImage("images/car2.png");
Car3img=loadImage("images/car3.png");
Car4img=loadImage("images/car4.png");
ground=loadImage("images/ground.png");
track=loadImage("images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2){
game.end();
  }
}
