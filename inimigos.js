class Inimigo{
    constructor(x,y){
    this.x = x
    this.y = y
    this.body = createSprite(x,y)
        this.image = loadImage("obstacle1.png")
        this.body.addImage(this.image)
        this.body.scale = 0.2
        this.body.debug = true
        this.body.velocityX = 1
    }
display(){

}
}