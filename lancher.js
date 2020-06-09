class Lancher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.lanch = Constraint.create(options);
        World.add(world, this.lanch);
    }

    display(){
        if(this.lanch.bodyA)
        {
        var pointA = this.lanch.bodyA.position;
        var pointB = this.lanch.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}