import React from 'react'

// annotate with JSX.Element > if we don't return JSX Element > complain
const NewReminder = (): JSX.Element => {
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
      />
      <button type='submit' className='btn btn-primary rounded-pill my-3'>
        Add Reminder
      </button>
    </form>
  )
}

export default NewReminder
