import Reminder from '../models/Reminder'

export interface ReminderListProps {
  items: Reminder[]
}

const ReminderList = ({ items }: ReminderListProps) => {
  // add some bootstrap classes
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li key={item.id} className='list-group-item'>
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default ReminderList
