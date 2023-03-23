import React, { useState } from 'react'

const NewReminder = (): JSX.Element => {
  const [title, setTitle] = useState('')

  // **** we don't implement here, but need to implement in App.tsx, because the state list is over there
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    // ***
    <form onSubmit={submitForm}>
      <label htmlFor='add-reminder' className='my-3'>
        Add Reminder
      </label>
      <input
        type='text'
        className='form-control my-3'
        id='add-reminder'
        placeholder='New Reminder'
        onChange={(e) => setTitle(e.target.value)}
        value={title} // ***
      />
      <button type='submit' className='btn btn-primary rounded-pill my-3'>
        Add Reminder
      </button>
    </form>
  )
}

export default NewReminder
