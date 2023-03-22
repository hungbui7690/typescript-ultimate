/*
  Parameter Decorators P1
  
*/

// for parameter decorator > we need to have parameterIndex + methodName
function Watch(target: any, methodName: string, parameterIndex: number) {}

class Vehicle {
  // param decorator
  move(@Watch speed: number) {}
}
