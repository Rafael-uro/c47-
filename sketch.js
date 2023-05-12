var personagem, imgPersona, imgPersona1, imgPersona2, imgPersona3
var inimigo, imgInimigo
var cano0, cano1 = []
var caixaSurpresa = []
var mapCano = [900, 1500, 3000,5772]
var grupinimi = []
var mapinmi = [1000, 1050, 1100, 1150, 1200, 1260,1350,1550,1600,1650, 1700, 2000, 2849, 3409, 5476,1001,1002,1003,4004,2145,2124,2034,5234,5502]
var mapCaixaSurpresa = [250, 900, 2690, 3494, 3940, 4019]
var pontos = 0
var reset, breset, gameOver, imgGameOver
var estadoDeJogo, JOGAR = 1, PERDENDO = 2
function preload() {
    imgPersona = loadAnimation("trex2.png", "trex3.png")
    imgPersona1 = loadAnimation("trex1.png")
    imgPersona2 = loadAnimation("trex4.png")
    imgPersona3 = loadAnimation("trex5.png", "trex6.png")
    imgInimigo = loadImage("obstacle1.png")
    cano0 = loadImage("th1 (1).png")
    imgGameOver = loadImage("gameOver.png")
    reset = loadImage("restart.png")
}
function setup() {
    createCanvas(1000, 600)
    for (var o = 0; o < mapCano.length; o++) {
        cano = new Bloco(mapCano[o], 310, 75, 300)
        cano1.push(cano)
        cano.body.addImage(cano0)
        cano1[o].body.setCollider("rectangle", 0, 0, 100, 100)

    }
    for (var p = 0; p < mapinmi.length; p++) {
        inimigo = new Inimigo(mapinmi[p], 310)
        grupinimi.push(inimigo)
        grupinimi[p].body.setCollider("circle", 0, 0, 150)
    }
    bloco0 = new Bloco(500, 610, 10000, 600)




    for (var i = 0; i < mapCaixaSurpresa.length; i++) {
        caixa = new Caixa(mapCaixaSurpresa[i], 200, 20, 20)
        caixaSurpresa.push(caixa)

    }

    personagem = createSprite(200, 310)
    personagem.addAnimation("parado", imgPersona1)
    personagem.addAnimation("mechendo", imgPersona)
    personagem.addAnimation("parador", imgPersona2)
    personagem.addAnimation("mechendor", imgPersona3)

    personagem.scale = 0.2
    personagem.velocityY += 0.5
    cano.body.debug = true
    estadoDeJogo = "JOGAR"

}
function draw() {
    background("grey")

    if (estadoDeJogo === "JOGAR") {
        caixa.display()
        

        camera.position.x = personagem.x
        camera.position.y = personagem.y
        personagem.velocityY += 0.5

        personagem.collide(bloco0.body)
        if (frameCount % 70 === 0) {
            pontos += 1
        }
        for (var i = 0; i < caixaSurpresa.length; i++) {
            if (caixaSurpresa[i] != undefined) {
                caixaSurpresa[i].display()
                if (caixaSurpresa[i].body.isTouching(personagem) && personagem.y > caixaSurpresa[i].body.y) {
                    caixaSurpresa[i].body.visible = false
                    pontos += 50
                    delete caixaSurpresa[i]
                }
                else {
                    personagem.collide(caixaSurpresa[i].body)
                }
            }
        }
        for (var o = 0; o < mapCano.length; o++) {
            cano1[o].display()
            personagem.collide(cano1[o].body)

        }
        for (var p = 0; p < mapinmi.length; p++) {
            if (grupinimi[p].body.isTouching(personagem) && (personagem.y + 40) < grupinimi[p].body.y && grupinimi[p].body.visible === true) {
                grupinimi[p].body.visible = false
                pontos += 100
                //delete grupinimi[p]
            }
            else if (grupinimi[p].body.isTouching(personagem) && grupinimi[p].body.visible === true) {
                estadoDeJogo = "PERDENDO"

            }
        }
        bloco0.display()
    }
    if (estadoDeJogo === "PERDENDO") {
        personagem.visible = false
        camera.position.x = 500
        camera.position.y = 300
        push()
        fill("black")
        textSize(100)
        text("GAME OVER", 200, 300)
        pop()
        
    }

    mover()
    move()
    push()
    fill("green")
    textSize(20)
    text("pontuação: " + pontos, personagem.x + 300, personagem.y - 200)
    pop()
    drawSprites()
}
function mover() {

    if (keyIsDown(RIGHT_ARROW)) {
        personagem.x += 10
        personagem.changeAnimation("mechendo", imgPersona)
    }
    else {
        personagem.changeAnimation("parado", imgPersona1)
    }




    if (keyIsDown(UP_ARROW)) {
        personagem.velocityY = -10
    }
}
function keyPressed() {

}
function move() {
    if (keyIsDown(LEFT_ARROW)) {
        personagem.x -= 10
        personagem.changeAnimation("mechendor", imgPersona3)
    }

}
