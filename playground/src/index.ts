/*
  Parameter Decorators P2
  
*/

// (1)
type WatchedParameter = {
  methodName: string
  parameterIndex: number
}

// (2)
const watchedParameters: WatchedParameter[] = []

function Watch(target: any, methodName: string, parameterIndex: number) {
  // (3)
  watchedParameters.push({
    methodName,
    parameterIndex,
  })
}

class Vehicle {
  move(@Watch speed: number) {}
}

// (4)
console.log(watchedParameters)
