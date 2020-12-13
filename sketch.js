
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint= Matter.Constraint;

var child, childFriend,childImg;
var ground,racket;
var parent;
var gameState=0;
var display_ground=true;


function preload(){

childImg= loadImage("images/boy1.png");
out=loadImage("images/house.png");
ins=loadImage("images/inside.png");
}

function setup() {
	createCanvas(displayWidth-5, displayHeight-150);
	
	

	engine = Engine.create();
	world = engine.world;

	
	child= new PlayingCharacter(displayWidth/2-100,displayHeight/2);
	ground=  createSprite(displayWidth/2,displayHeight-500, displayWidth,displayHeight);
	ground.addImage("in",ins);
	ground.addImage("out",out);
   


	//childFriend= new NonPlayingCharacter(700,300,120,130);
	parent= new NonPlayingCharacter(displayWidth/2-100,displayHeight/2-500,200,100);
	racket=new Racket(child.body,{x: 100, y:400});

Engine.run(engine);
  
}


function draw() {
 


  if (gameState===0){
	  background(0);
	  ground.visible=false; 
	  textSize(24);
	  stroke("white");
	  fill(0);
	  text("The child wants to become a tennis player but his parents do not support him.",300,300)
	  text(" You have to help him become a tennis player by solving obstacles and reaching top 3 on the leaderboard. ",300,330);
	  text("PRESS ENTER TO START",300,390);
	  
if(keyDown("ENTER")){
gameState=1;


}
	  
  }
  
 
  if (gameState===1){
	txt=text("Help the kid to reach the tournament",300,300);


	ground.display();
ground.visible=true;
txt.depth=ground.depth;
ground.depth=ground.depth-100;
console.log(txt.depth)
//console.log(ground.depth)
child.display();



if ( keyDown ("A")){

	gameState=2;

}
  }


  if (gameState===2){
	//imageMode(CENTER);
	///image (out,displayWidth/2,displayHeight-500, displayWidth-10,displayHeight-10);
	//racket.display();
	if (display_ground===true){
		ground.display();
		display_ground=false; 
		}
		
  console.log(ground.x);
  Matter.Body.setVelocity(ground.body,{ x:-7,y:0})
	//childFriend.display();
    //ground.addImage("outside",out);


	
  }
//racket.display();
 
 //childFriend.display();

 //(childImg,300,600,50,50)



  drawSprites();
 
}



