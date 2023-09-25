/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const Persons = ({ filteredValues, deletePerson }) => {
  return (
    <ul>
{filteredValues.map((person) => <div key ={person.id}> <li key = {person.id}>{person.name} {person.number}</li> <button onClick={() => deletePerson(person.id)}>delete</button> </div>)}
  </ul>
  )
}

export default Persons
