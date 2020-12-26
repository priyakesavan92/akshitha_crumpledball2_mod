class Paper{

constructor(x,y,r)
{
  var options = {
   isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2
  }

  this.x = x;
  this.y = y;
  this.r = 70;
  this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
  this.image = loadImage("paper.png");
  World.add(world, this.body);

}
display()

{
    var Paperpos = this.body.position;

    push();
    translate(Paperpos.x,Paperpos.y);
    imageMode(CENTER);
    image(this.image,0,0,70,70);
    pop();


}
}