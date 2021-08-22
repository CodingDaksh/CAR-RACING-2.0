var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var Car1,Car2,Car3,Car4,Track;

function preload(){
  Track = loadImage("images/track.jpg");
  Car2 = loadImage("images/car2.png");
  Car3 = loadImage("images/car3.png");
  Car4 = loadImage("images/car4.png");
  Car1 = loadImage("images/car1.png");
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

  if(gameState===2){
    game.end();
  }
}
