/*
  Static Members P2

*/

class Ride {
  activeRides: number = 0

  start() {
    this.activeRides++
  }
  stop() {
    this.activeRides--
  }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

// both activeRides are independent to each other > we have 2 activeRides slot in the memory
console.log(ride1.activeRides)
console.log(ride2.activeRides)
