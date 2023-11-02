namespace SpriteKind {
    export const mushroom = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    index = 0
    mySprite.setVelocity(0, 0)
    initialx = mySprite.x
    initialy = mySprite.y
    xhopped = 0
    yhopped = 0
    while (xhopped <= radius * 2) {
        yhopped = Math.sqrt(radius * radius - (radius - xhopped) * (radius - xhopped))
        mySprite.x = initialx + xhopped
        mySprite.y = initialy - yhopped
        xhopped += 1
        pause(25)
        if (Math.abs(mySprite.x - obstacle.x) < 2) {
            if (mySprite.overlapsWith(obstacle)) {
                info.setLife(newlifes)
                sprites.destroy(obstacle)
            } else {
                info.changeScoreBy(1)
            }
        }
    }
    mySprite.setVelocity(3, 0)
})
let newlifes = 0
let yhopped = 0
let xhopped = 0
let initialy = 0
let initialx = 0
let index = 0
let radius = 0
let obstacle: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
info.setLife(3)
mySprite = sprites.create(assets.image`mysprite`, SpriteKind.Player)
obstacle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c b 1 1 1 3 3 3 3 1 1 3 c c . 
    c b d 1 1 1 3 3 3 3 3 3 3 b b c 
    c b b d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    . c b b b d d 1 1 3 b d d d c . 
    . . c c b b d d b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `, SpriteKind.mushroom)
mySprite.setPosition(7, 101)
mySprite.setVelocity(3, 0)
radius = game.askForNumber("set your hop radius")
let mushroomTimeSpan = 5000
controller.moveSprite(mySprite, 100, 0)
info.startCountdown(30)
game.onUpdateInterval(50, function () {
    if (mySprite.x > 160) {
        game.gameOver(true)
    }
    if (Math.abs(mySprite.x - obstacle.x) < 2) {
        if (Math.abs(mySprite.y - obstacle.y) < 2) {
            sprites.destroy(obstacle)
            info.setLife(newlifes)
        }
    }
})
game.onUpdateInterval(mushroomTimeSpan, function () {
    newlifes = info.life() - 1
    sprites.destroy(obstacle)
    obstacle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . b b 3 3 3 3 b b . . . . 
        . . . c b 3 3 3 3 1 1 b c . . . 
        . . c b 3 3 3 3 3 1 1 1 b c . . 
        . c b 1 1 1 3 3 3 3 1 1 3 c c . 
        c b d 1 1 1 3 3 3 3 3 3 3 b b c 
        c b b d 1 3 3 3 3 3 1 1 1 b b c 
        c b b b 3 3 1 1 3 3 1 1 d d b c 
        . c b b b d d 1 1 3 b d d d c . 
        . . c c b b d d b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        . . . . . b b d 1 1 b . . . . . 
        . . . . . b d d 1 1 b . . . . . 
        `, SpriteKind.mushroom)
    obstacle.setPosition(150, 101)
    obstacle.setVelocity(-30, 0)
    mushroomTimeSpan += -500
})
