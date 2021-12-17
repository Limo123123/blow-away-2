input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    col = 0
    row = 0
})
let row = 0
let col = 0
music.setBuiltInSpeakerEnabled(true)
basic.showLeds(`
    . # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    soundExpression.sad.playUntilDone()
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            row = randint(0, 4)
            col = randint(0, 4)
        }
        if (led.point(col, row)) {
            led.unplot(col, row)
            led.plot(col + 1, row)
        }
    }
})
