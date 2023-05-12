class Caixa {
    constructor(x,y,width,height) {
        this.x = x
        this.y = y
        this.w = width
        this.h = height

        this.body = createSprite(this.x,this.y,this.w,this.h)
    }
    display(){
       this.body.shapeColor = "red"
    }
}