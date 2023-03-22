/*
  Interfaces P1
  - classes: blueprints for creating objects
  - interfaces: to define a shape of objects

*/

// because we don't know which type of calendar it is > use abstract class
abstract class Calender {
  constructor(public name: string) {}

  addEvent() {}
  removeEvent() {}
}
