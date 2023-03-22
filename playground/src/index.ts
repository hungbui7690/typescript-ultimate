/*
  Static Members P7

*/

class Ride {
  private static _activeRides: number = 0

  start() {
    Ride._activeRides++
  }
  stop() {
    Ride._activeRides--
  }

  // (***) must turn into static method
  static get activeRides() {
    return Ride._activeRides
  }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()
ride2.start()

console.log(Ride.activeRides) // now, we can access from the outside
