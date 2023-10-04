import axios from 'axios'

const getAll = () => {
  const request = axios
    .get('http://localhost:3001/persons')

  return request.then(response => response.data).catch(() => {
    console.log('error')
  })
}

const addValue = (newPerson) => {
  const request = axios.post('http://localhost:3001/persons', newPerson)
  return request.then((response) => response.data).catch(() => {
    console.log('error')
  })
}

const deleteValue = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`)
  return request.then((response) => response).catch(() => {
    console.log('error')
  })
}

const updateValue = (newPerson) => {
  const id = newPerson.id
  const request = axios.put(`http://localhost:3001/persons/${id}`, newPerson)

  return request.then(response => response.data).catch(() =>
    console.log('error')
  )
}

export default {
  getAll,
  addValue,
  deleteValue,
  updateValue

}
