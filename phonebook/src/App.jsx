/* eslint-disable max-len */
import { useState, useEffect, React } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import backend from './components/backend'

// eslint-disable-next-line require-jsdoc
function App () {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setsearchValue] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const updateValues = (event) => {
    setsearchValue(event.target.value)
  }

  useEffect(() => {
    backend.getAll()
      .then(response => {
        setPersons(response)
      })
  },
  [])

  const filteredValues = searchValue
    ? persons.filter(
      (person) => person.name.toLowerCase()
        .search(searchValue.toLowerCase()) !== -1
    )
    : persons

  const addPerson = (newPerson) => {
    backend.addValue(newPerson)
      .then((response) => {
        setPersons(persons.concat(response))
      })
  }

  const deletePerson = (id) => {
    const value = persons.find((person) => person.id === id)
    const confirmationstring = `delete ${value.name} ?`
    if (window.confirm(confirmationstring)) {
      backend.deleteValue(id)
        .then((response) => setPersons(persons.filter(person => person.id !== id)))
    }
  }

  const findDuplicate = (newPerson) => (persons.findIndex((person) => JSON.stringify(person.name) === JSON.stringify(newPerson.name)) === -1)

  const replaceNumber = (newPerson) => {
    const oldPerson = persons.find((person) => JSON.stringify(person.name) === JSON.stringify(newPerson.name))
    newPerson.id = oldPerson.id
    const name = oldPerson.name
    const message = `${name} is already in the book, replace the old number with new number ?`
    if (window.confirm(message)) {
      backend.updateValue(newPerson)
        .then((response) => {
          setPersons(persons.map((person) => (person.id === response.id) ? newPerson : person))
        })
    }
  }

  const addContact = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    findDuplicate(newPerson) ? addPerson(newPerson) : replaceNumber(newPerson)
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={searchValue} updateValues={updateValues} />
      <h3>add a new</h3>
      <PersonForm
        addContact={addContact}
        newName={newName}
        handleName={handleName}
        handleNumber={handleNumber}
      />
      <h3>Numbers</h3>
      <Persons filteredValues={filteredValues} deletePerson = {deletePerson} />
    </div>
  )
}

export default App
