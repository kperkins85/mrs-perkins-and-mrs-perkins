tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . 5 5 . . . . 
    . . 5 5 . . . . . 5 5 . . . . . 
    . . . 5 5 . . . . 5 . . . . . . 
    . . . . 5 . . . 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . 5 5 5 1 5 1 5 5 5 5 . . 5 
    5 . . 5 5 5 8 5 8 5 5 5 5 . . . 
    5 . . 5 5 5 5 5 5 5 5 5 5 . . . 
    5 5 5 5 5 2 5 5 5 2 5 5 5 . . . 
    . . . . 5 5 2 2 2 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 . . 5 . . 
    . . . . 5 5 . . . 5 . . . . 5 . 
    . . . . 5 . . . . 5 . . . . 5 5 
    . . . 5 5 . . . . 5 . . . . . . 
    . . . 5 . . . . . 5 5 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
