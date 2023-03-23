/*
  Handling Form Submission P3

*/

import { useState, useEffect } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'
import reminderService from './services/reminder'
import NewReminder from './components/NewReminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  // *** async/await > go to form and clear field after add
  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title) // the api just allow us to add 1 element, since new id does not change
    console.log(newReminder)
    setReminders([newReminder, ...reminders])
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
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  )
}

export default App
