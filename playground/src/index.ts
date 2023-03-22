/*
  Interfaces P2

  - What should we use? Interfaces or Abstract Classes? 
    > if we have some common logic that we want to share across the class > use abstract 
    > here we just define the interface, without any implementation > use Interfaces

*/

// to make it cleaner > use interfaces
interface Calendar {
  name: string

  addEvent(): void
  removeEvent(): void
}
