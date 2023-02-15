radio.onReceivedNumber(function (receivedNumber) {
    let ReceivedNumber = 0
    if (ReceivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
basic.showNumber(3)
basic.forever(function () {
    radio.setGroup(42)
})
