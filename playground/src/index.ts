/*
  Abstract Classes & Methods P1

*/

// at this time, we don't know which shape is this class > we don't know how to write render()
class Shape {
  constructor(public color: string) {}

  render() {}
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color)
  }

  // because this is a circle, we know its shape, so we can render
  override render(): void {
    console.log('Rendering a Circle')
  }
}

// (***) problem here > shape is not a real thing, unlike circle > we should not allow to create a new shape
let shape = new Shape('red')
shape.render()
