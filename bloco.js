class Bloco {
    constructor(x, y, width, height) {
        this.w = width
        this.h = height
        this.x = x
        this.y = y
        // this.image = loadImage()
        this.body = createSprite(this.x, this.y, this.w, this.h)
        
    }
    display() {
        this.body.shapeColor = "blue"
    }

}