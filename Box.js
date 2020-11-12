class Box {
    constructor(){
        var options = {
            restitution:1
        }
        this.body = Bodies.rectangle(200,100,50,50);
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        

        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
