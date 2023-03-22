/*
  Creating a Component P2
  - put interfaces in a new file
    > create models/Reminder.ts or entities/ or interfaces/ 

*/

import './App.css'
import ReminderList from './components/ReminderList' // ***

function App() {
  return (
    <div>
      <button className='btn btn-primary'>Click Me</button>

      {/* error here > fix in next lecture */}
      <ReminderList />
    </div>
  )
}

export default App
