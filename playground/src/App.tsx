/*
  Calling the Backend
  > https://jsonplaceholder.typicode.com/todos

  - we don't want to call the backend in App.tsx file > but we will create a separated module to do this
  - create services/reminder.ts
    + npm install axios
      > axios comes with type declaration files > we don't need to install @types package

*/

import { useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/Reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'Reminder 1' },
  ])

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  )
}

export default App
