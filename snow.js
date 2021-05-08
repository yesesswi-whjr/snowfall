class Snow{
constructor(x,y){
var options={
isStatic:false,
restitution:0.1,
friction:0.01



}
this.body=Bodies.circle(x,y,3,options)
this.image=loadImage("snow4.webp")
World.add(world,this.body)

}

display(){
fill("red")
image(this.image,this.body.position.x,this.body.position.y,30,30)
}
reset(){
if(this.body.position.y>height){
Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})


}
}



}



