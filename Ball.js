class Ball{
    constructor(x,y,r){
      var options={
          density : 1,
          frictionAir : 0.05,
          }
      this.body = Bodies.circle(x,y,r,options)
      this.r = r   
      World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(pos.x,pos.y,this.r,this.r)        
        pop()
    }
}