import Reminder from '../models/Reminder' // ***

export interface ReminderListProps {
  items: Reminder[]
}

const ReminderList = ({ items }: ReminderListProps) => {
  // hover, we will see item has type of Reminder
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default ReminderList
