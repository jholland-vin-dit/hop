@namespace
class SpriteKind:
    mushroom = SpriteKind.create()

def on_b_pressed():
    global index, initialx, initialy, xhopped, yhopped
    index = 0
    mySprite.set_velocity(0, 0)
    initialx = mySprite.x
    initialy = mySprite.y
    xhopped = 0
    yhopped = 0
    while xhopped <= radius * 2:
        yhopped = Math.sqrt(radius * radius - (radius - xhopped) * (radius - xhopped))
        mySprite.x = initialx + xhopped
        mySprite.y = initialy - yhopped
        xhopped += 1
        if abs(mySprite.x - obstacle.x) < 2:
            if mySprite.overlaps_with(obstacle):
                info.change_life_by(-1)
                sprites.destroy(obstacle)
            else:
                info.change_score_by(1)
        pause(25)
    mySprite.set_velocity(3, 0)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

newlifes = 0
obstacle: Sprite = None
yhopped = 0
xhopped = 0
initialy = 0
initialx = 0
index = 0
radius = 0
mySprite: Sprite = None
info.set_score(0)
info.set_life(3)
mySprite = sprites.create(assets.image("""
    mysprite
"""), SpriteKind.player)
mySprite.set_position(7, 101)
mySprite.set_velocity(3, 0)
radius = 25
controller.move_sprite(mySprite, 100, 0)

def on_update_interval():
    if mySprite.x > 160:
        game.game_over(True)
    if abs(mySprite.x - obstacle.x) < 2:
        if abs(mySprite.y - obstacle.y) < 2:
            sprites.destroy(obstacle)
            info.set_life(newlifes)
game.on_update_interval(50, on_update_interval)

def on_update_interval2():
    global newlifes, obstacle
    newlifes = info.life() - 1
    sprites.destroy(obstacle)
    obstacle = sprites.create(img("""
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
        """),
        SpriteKind.mushroom)
    obstacle.set_position(150, 101)
    obstacle.set_velocity(-30, 0)
game.on_update_interval(5500, on_update_interval2)
