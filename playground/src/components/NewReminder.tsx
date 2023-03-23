import React, { useState } from 'react'

const NewReminder = (): JSX.Element => {
  const [title, setTitle] = useState('') // ***

  return (
    <form>
      <label htmlFor='add-reminder' className='my-3'>
        Add Reminder
      </label>
      <input
        type='text'
        className='form-control my-3'
        id='add-reminder'
        placeholder='New Reminder'
        onChange={(e) => setTitle(e.target.value)} // hover e
        value={title} // ***
      />
      <button type='submit' className='btn btn-primary rounded-pill my-3'>
        Add Reminder
      </button>
    </form>
  )
}

export default NewReminder
