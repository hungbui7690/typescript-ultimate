/*
  Abstract Classes & Methods P2

*/

// so we use abstract keyword to define abstract class > can't create new instance from abstract class
abstract class Shape {
  constructor(public color: string) {}

  render() {}
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
