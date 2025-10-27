input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    WaiterWaitermorewaitplease = 1
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            . # # # #
            # # # # #
            # # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let WaiterWaitermorewaitplease = 0
let LightState = 0
WaiterWaitermorewaitplease = 0
basic.forever(function () {
    if (LightState > 2) {
        LightState = 0
    }
    if (LightState == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
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
    LightState += 1
    basic.pause(1000)
})
