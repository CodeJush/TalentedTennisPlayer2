class Racket{

    constructor (bodyA,pointB){
var options= {
 bodyA:bodyA,
 pointB:pointB,
 stiffness: 0.001,
 length: 0.01

}
this.image=loadImage("images/tennis racket.svg")
   this.racket=Constraint.create(options)
   

    World.add(world,this.racket)

}

attach (body){
this.racket.bodyA=body;

}


display(){
//var pointA=this.racket.bodyA.position;
//var pointB=this.pointB;

//var pos=this.body.position;

//push();
//translate(pos.x,pos.y);
//rectMode(CENTER);
//fill(230,130,100);
//imageMode(CENTER);
//line(this.racket.bodyA.position.x,this.racket.bodyA.position.y,this.pointB.x,this.pointB.y);
image(this.image,0,0,this.width,this.height);
//pop()
}

}