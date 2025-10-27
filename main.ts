input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (make == 0) {
        make = 1
    } else {
        make = 0
    }
})
let make = 0
let LightState = 0
basic.forever(function () {
    if (make == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # .
            . # # # .
            `)
    }
    if (LightState == 2) {
        make = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (LightState == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (LightState == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (LightState == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
    	
    }
})
basic.forever(function () {
    if (LightState == 2) {
        basic.pause(10000)
        LightState += -1
        basic.pause(5000)
        LightState += -1
    } else {
        basic.pause(5000)
        LightState += 1
    }
})
basic.forever(function () {
	
})
