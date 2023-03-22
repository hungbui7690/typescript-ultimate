/*
  Static Members P4

*/

class Ride {
  static activeRides: number = 0

  start() {
    Ride.activeRides++
  }
  stop() {
    Ride.activeRides--
  }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

// problem: now we can modify it from outside
Ride.activeRides = 100
console.log(Ride.activeRides)
