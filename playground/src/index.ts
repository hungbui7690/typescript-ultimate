/*
  Intersection Types P2

*/

type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

// intersection
type UIWidget = Draggable & Resizable

// must have 2 functions that we defined in both type alias
let areaBox: UIWidget = {
  drag() {},
  resize() {},
}
