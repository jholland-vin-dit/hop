// gratiuitous comment
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 0)
    initialx = mySprite.x
    initialy = mySprite.y
    xhopped = 0
    yhopped = 0
    while (index <= radius * 2) {
        yhopped = Math.sqrt(radius * radius - (radius - xhopped) * (radius - xhopped))
        message = "index:" + ("" + index) + "xhopped" + ("" + xhopped) + "yhopped:" + ("" + yhopped)
        mySprite.x = initialx + xhopped
        mySprite.y = initialy - yhopped
        xhopped += 1
        pause(25)
        index += 1
    }
    mySprite.setVelocity(3, 0)
})
let message = ""
let index = 0
let yhopped = 0
let xhopped = 0
let initialy = 0
let initialx = 0
let radius = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`mysprite`, SpriteKind.Player)
mySprite.setPosition(7, 101)
mySprite.setVelocity(3, 0)
radius = 20
