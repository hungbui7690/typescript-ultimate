/*
  Enums P1
  
  */

// wa normally use constant for these things
const SMALL = 1
const MEDIUM = 2
const LARGE = 3

// we also use enums to do this > Pascal case + no = sign
enum Size {
  SMALL = 0,
  MEDIUM, // = 1
  LARGE, // = 2 => auto increment
}

enum shippingStatus {
  PENDING = 2,
  SHIPPED,
  DELIVERED,
  RETURNED, // = 5
}
