class Chain{
    constructor(bodyA,pointB){
        var opt = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:10.00
        }
        this.chain=Constraint.create(opt);
        World.add(world,this.chain)
    }
  display(){
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
  }

}