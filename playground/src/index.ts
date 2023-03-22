/*
  Static Members P3

*/

class Ride {
  static activeRides: number = 0 // use "static" keyword

  start() {
    Ride.activeRides++ // use "class name", not "this" to access static property
  }
  stop() {
    Ride.activeRides--
  }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

// static > 1 slot in memory
console.log(Ride.activeRides) // 2
