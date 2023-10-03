#gratiuitous comment
def on_b_pressed():
    global initialx, initialy, xhopped, yhopped, message
    mySprite.set_velocity(0, 0)
    initialx = mySprite.x
    initialy = mySprite.y
    xhopped = 0
    yhopped = 0
    index = 0
    while index <= radius * 2:
        yhopped = Math.sqrt(radius * radius - (radius - xhopped) * (radius - xhopped))
        message = "index:" + str(index) + "xhopped" + str(xhopped) + "yhopped:" + str(yhopped)
        mySprite.x = initialx + xhopped
        mySprite.y = initialy - yhopped
        xhopped += 1
        pause(25)
        index += 1
    mySprite.set_velocity(3, 0)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

message = ""
yhopped = 0
xhopped = 0
initialy = 0
initialx = 0
radius = 0
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    mysprite
"""), SpriteKind.player)
mySprite.set_position(7, 101)
mySprite.set_velocity(3, 0)
radius = 20