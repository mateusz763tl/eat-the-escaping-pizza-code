info.onCountdownEnd(function () {
    game.splash("you lose")
    info.setScore(0)
})
function pro (_: Sprite) {
	
}
info.onScore(50, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    game.splash("you win")
    info.setScore(0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(2)
})
let pizza: Sprite = null
scene.setBackgroundColor(9)
let Player_guy = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(Player_guy)
pizza = sprites.create(assets.image`pizza`, SpriteKind.Food)
game.splash("click space on ur keyboard to start")
game.onUpdate(function () {
	
})
forever(function () {
	
})
