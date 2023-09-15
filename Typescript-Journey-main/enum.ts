//enumis used to restrict somebody choices

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 3,    //asign numbers from 3 to n(3, 4, 5)
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.FOURTH

console.log(hcSeat)

export{}