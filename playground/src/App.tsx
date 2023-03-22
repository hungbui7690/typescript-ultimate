/*
  Using the State Hook P2

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
  const [reminders, setReminders] = useState<Reminder[]>([]) // pass empty array > Reminder[]
  const [loading, setLoading] = useState(true) // if we don't supply the type, TS will infer the type for us

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
