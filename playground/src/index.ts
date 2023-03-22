/*
  Index Signature P3

*/

// this is index signature
class SeatAssignment {
  [seatNumber: string]: string
}

let seats = new SeatAssignment()
seats.A1 = 'John'
seats['A2'] = 'Nick'

console.log(seats)
