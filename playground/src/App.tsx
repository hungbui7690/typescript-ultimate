/*
  Handling Events P2
  - the data is in App.js > function need to create here
  - but we need to pass the function through props > add function definition for props in ReminderList.tsx

*/

import { useState, useEffect } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'
import reminderService from './services/reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  // ***
  const removeReminder = (id: number) => {
    console.log(id)
  }

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder()
    setReminders(reminders)
  }

  useEffect(() => {
    loadReminders()
  }, [])

  return (
    <div>
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  )
}

export default App
