class NonPlayingCharacter{

    constructor (x,y,width,height){

   this.body= Bodies.rectangle(x,y,width,height)
   this.width=width;
   this.height=height;

    World.add(world,this.body)
this.image=loadImage("images/Parents.jpg");
}

ParentMove(){
    this.velocityX=-4; 

}

display(){
var pos2 = this.body.position;
//rectMode(CENTER);
imageMode(CENTER);
fill(130,203,320);
//rect(pos2.x,pos2.y,this.width,this.height);
image(this.image,pos2.x,pos2.y,this.width,this.height);
}
}