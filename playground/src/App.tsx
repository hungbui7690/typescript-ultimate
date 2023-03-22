/*
  Creating a Component P3

*/

import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder' // (***)

// ***
const reminders: Reminder[] = [
  { id: 1, title: 'Reminder 1' },
  { id: 2, title: 'Reminder 2' },
]

function App() {
  return (
    <div>
      {/* *** */}
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
