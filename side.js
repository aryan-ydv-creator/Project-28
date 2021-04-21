class Side{
    constructor(x,y,width,height){
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width;
        this.height = height;
        this.x = x
        this.y = y
        World.add(world,this.body)

    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("green")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

        
      }
}