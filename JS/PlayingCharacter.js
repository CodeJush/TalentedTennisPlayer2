class PlayingCharacter{

    constructor (x,y){
    
        var options = {
            restitution : 0,
            friction : 1,
            density: 0.004
        }
        this.image=loadImage("images/tennisboi.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width= 100;
        this.height=300; 
       
    

        
    
       
    
        World.add(world,this.body);
    }

    





display(){

    

     var pos = this.body.position;
//push();
if (keyDown(UP_ARROW)){
	this.body.position.y-=10;
	
	 }

if (keyDown(RIGHT_ARROW)){
this.body.position.x+=10;
		
 }

 if (keyDown(LEFT_ARROW)){
	this.body.position.x-=10;
	
	 }


if (keyDown(DOWN_ARROW)){
this.body.position.y+=10;

 }
//translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,300,600,this.width,this.height);


//pop();

}
}