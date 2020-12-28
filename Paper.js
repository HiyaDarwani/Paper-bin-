class Paper{
    constructor(x, y, radius){
        var options ={
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, options)
        this.image = loadImage("paper.png")
        World.add(world, this.body)
        this.radius = radius
       
    }
    display(){
        ellipseMode(RADIUS)
        imageMode(CENTER)
        image(this.image, 0, 0, this.radius)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
        
    }
}