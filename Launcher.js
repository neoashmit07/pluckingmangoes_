class Launcher{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length:0
        }
            //this.bodyA = bodyA
            this.pointB = pointB
            this.launcher=Constraint.create(options)
            World.add(world,this.launcher)
        }
    
        fly()
        {
            this.launcher.bodyA=null;
        }

        attach(body){
            this.launcher.bodyA= body;
        }
    
        display()
        {
            if(this.launcher.bodyA !== null)
            {
                var pointA=this.launcher.bodyA.position;
                var pointB = pointB;
    
                push();
                strokeWeight(2);		
                line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
                pop();
            }
        }
    }