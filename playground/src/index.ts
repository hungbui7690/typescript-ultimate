/*
  Static Members P5

*/

class Ride {
  private static activeRides: number = 0 // use private keyword

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

Ride.activeRides = 100 // complain > we cannot set activeRides outside of class > but we cannot get the value of activeRides from outside
