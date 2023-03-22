/*
  Abstract Classes & Methods P3

*/

abstract class Shape {
  constructor(public color: string) {}

  // we also need to abstract this method as well > remove {} + add return type
  // note: abstract method can only appears in abstract class
  abstract render(): void
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color)
  }

  override render(): void {
    console.log('Rendering a Circle')
  }
}

// (***) complain
let shape = new Shape('red')
shape.render()
