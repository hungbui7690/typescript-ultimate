// naming convention
interface Reminder {
  id: number
  title: string
}

interface ReminderListProps {
  items: Reminder[] // use here
}

// use here
const ReminderList = (props: ReminderListProps) => {
  return <div></div>
}

export default ReminderList
