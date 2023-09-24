/* eslint-disable max-len */
import { useState, useEffect, React } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

// eslint-disable-next-line require-jsdoc
function App () {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setsearchValue] = useState('')

  useEffect(
    () => {
      axios
        .get('http://localhost:3001/persons')
        .then((response) => {
          setPersons(response.data)
        })
    },

    []
  )

  const updateValues = (event) => {
    setsearchValue(event.target.value)
  }

  const filteredValues = searchValue
    ? persons.filter(
      (person) => person.name.toLowerCase()
        .search(searchValue.toLowerCase()) !== -1
    )
    : persons

  const addPerson = (newPerson) => {
    axios
      .post('http://localhost:3001/persons', newPerson)
      .then((response) => {
        setPersons(persons.concat(response.data))
      })
  }

  const findDuplicate = (newPerson) => (persons.findIndex((person) => JSON.stringify(person.name) === JSON.stringify(newPerson.name)) === -1)

  const addContact = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    findDuplicate(newPerson) ? addPerson(newPerson) : alert(`${newName} already exists`)
    setNewName('')
    setNewNumber('')
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
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

      <Persons filteredValues={filteredValues} />

    </div>
  )
}

export default App
