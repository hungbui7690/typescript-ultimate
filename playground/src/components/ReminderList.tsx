import Reminder from '../models/Reminder'

export interface ReminderListProps {
  items: Reminder[]
}

const ReminderList = ({ items }: ReminderListProps) => {
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li key={item.id} className='list-group-item'>
          {item.title}

          {/* *** */}
          <button className='btn btn-outline-danger mx-3 rounded-pill'>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ReminderList
