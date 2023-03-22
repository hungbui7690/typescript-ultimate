/*
  Interfaces P3

*/

interface Calendar {
  name: string

  addEvent(): void
  removeEvent(): void
}

// (***)
interface CloudCalendar extends Calendar {
  sync(): void
}

// now we want to have real / concrete calendar > instead use the extends keyword > use implements keyword
class GoogleCalendar implements CloudCalendar {
  constructor(public name: string) {}

  addEvent(): void {}

  removeEvent(): void {}

  sync(): void {}
}
