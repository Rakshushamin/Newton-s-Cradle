class Chain{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display()
    {
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x
		var Anchor1Y=pointA.y
	//	var Anchor1X=pointA.x
 	//	var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY
 	//	var Anchor2X=pointB.x+this.offsetX
 	//	var Anchor2Y=pointB.y+this.offsetY

        stroke(0,21,255);
        line(Anchor1X,Anchor1Y,Anchor1X,Anchor2Y);
        //line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}