/*
  Using the State Hook P1

*/

import { useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'

const reminders: Reminder[] = [
  { id: 1, title: 'Reminder 1' },
  { id: 2, title: 'Reminder 2' },
]

function App() {
  const [reminders, setReminders] = useState<Reminder[]>() // Reminder[] | undefined > undefined because we did not initialize > if we don't supply arg, undefined will be passed

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
