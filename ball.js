class Ball{
    constructor(x,y){
        var opt = {
            'restitution':0.05,
            'density':0.05,
            'friction':1.0
           // isStatic: true
            
        }
        this.body=Bodies.circle(x,y,40,opt);
        this.radius=40;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        strokeWeight(4)
        stroke("black")
        ellipse(0,0,this.radius,this.radius)
        pop ();
        
    }
}