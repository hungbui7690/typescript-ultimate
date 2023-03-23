export default class Reminder {
  id: number
  isComplete: boolean

  // we just want to pass the title > id and isComplete will have default values > go to routes
  constructor(public title: string) {
    this.id = Date.now()
    this.isComplete = false
  }
}
