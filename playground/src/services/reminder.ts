import axios from 'axios'
import Reminder from '../models/Reminder'

// (***) remember this pattern
class ReminderService {
  http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  })

  async getReminder() {
    // type must be array > Reminder[]
    const response = await this.http.get<Reminder[]>('/todos')
    return response.data
  }

  async addReminder(title: string) {
    // type = Reminder
    const response = await this.http.post<Reminder>('/todos', { title })
    return response.data
  }

  async removeReminder(id: number) {
    const response = await this.http.delete<Reminder>('/todos/' + id)
    return response.data
  }
}

// export the instance
const reminderService = new ReminderService()
export default reminderService
