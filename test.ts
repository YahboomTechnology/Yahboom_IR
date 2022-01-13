// tests go here; this will not be compiled when this package is used as an extension.
makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
makerbit.connectIrReceiver(DigitalPin.P8)
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)