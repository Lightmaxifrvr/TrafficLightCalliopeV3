def on_button_a():
    global make
    if make == 0:
        make = 1
    else:
        make = 0
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

make = 0
LightState = 0

def on_forever():
    global make
    if make == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        music.play_tone(988, music.beat(BeatFraction.WHOLE))
        basic.pause(100)
        music.play_tone(131, music.beat(BeatFraction.WHOLE))
        basic.show_leds("""
            . # # # .
            # # # # #
            # # # # #
            # # # # .
            . # # # .
            """)
    if LightState == 2:
        make = 0
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
basic.forever(on_forever)

def on_forever2():
    if LightState == 0:
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P0, 1)
    elif LightState == 1:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
    elif LightState == 2:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
    else:
        pass
basic.forever(on_forever2)

def on_forever3():
    global LightState
    if LightState == 2:
        basic.pause(10000)
        LightState += -1
        basic.pause(5000)
        LightState += -1
    else:
        basic.pause(5000)
        LightState += 1
basic.forever(on_forever3)

def on_forever4():
    pass
basic.forever(on_forever4)
