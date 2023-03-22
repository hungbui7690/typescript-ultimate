/*
  Handling Events P3

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
    const newReminders = reminders.filter((r) => r.id !== id)

    setReminders(newReminders)
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
