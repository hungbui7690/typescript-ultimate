/*
  Handling Form Submission P2

*/

import { useState, useEffect } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'
import reminderService from './services/reminder'
import NewReminder from './components/NewReminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  // ***
  const addReminder = (title: string) => {
    console.log(title)
  }

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
      <NewReminder
        onAddReminder={addReminder} // *** err > need to define interface
      />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  )
}

export default App
