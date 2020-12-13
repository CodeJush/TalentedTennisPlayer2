class Ground{

    constructor (x,y,width,height){
var options= {
 isStatic: 1

}
//var speed=random(100,700);

   this.body= Bodies.rectangle(x,y,width,height,options)
   this.width=width;
   this.height=height;

   this.image=loadImage("images/inside.png");
   
    World.add(world,this.body)

}

display(){
var pos=this.body.position;
//rectMode(CENTER);
//fill(230,130,100);
imageMode(CENTER);

image(this.image,pos.x,pos.y,this.width,this.height);
 //this.body.setVelocity=-5;



   //this.image.velocityX=-5;
   //this.x=this.width/2. 

}
}