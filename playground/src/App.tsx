/*
  Using the Effect Hook P1

*/

import { useState, useEffect } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'

import reminderService from './services/reminder' // import the service

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]) // remove sample data

  // ***
  const loadReminders = async () => {
    const reminders = await reminderService.getReminder()
    setReminders(reminders)
  }

  // ***
  useEffect(() => {
    loadReminders() // without await
  }, [])

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
