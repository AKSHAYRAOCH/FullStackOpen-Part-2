import React from 'react'

// eslint-disable-next-line require-jsdoc
function PersonForm ({
  // eslint-disable-next-line react/prop-types
  newName, handleName, newNumber, handleNumber, addContact
}) {
  return (
    <form onSubmit={addContact}>
      <div>
        name:
        {' '}
        <input value={newName} onChange={handleName} />
      </div>
      <div>
        number:
        {' '}
        <input value={newNumber} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
