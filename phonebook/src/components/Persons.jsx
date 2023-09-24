/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const Persons = ({ filteredValues }) => {
  return (
    <ul>
{filteredValues.map((person) => <li key = {person.id}>{person.name} {person.number}</li>)}
  </ul>
  )
}

export default Persons
