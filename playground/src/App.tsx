/*
  Using the State Hook P3

*/

import { useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'Reminder 1' },
  ]) // add sample data here

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
