/*
  Using the Effect Hook P2
  - apply some bootstrap class
    > ReminderList

*/

import { useState, useEffect } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'
import reminderService from './services/reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder()
    setReminders(reminders)
  }

  useEffect(() => {
    loadReminders()
  }, [])

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
