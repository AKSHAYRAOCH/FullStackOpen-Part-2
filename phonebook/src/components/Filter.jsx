/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const Filter = ({ searchValue, updateValues }) => {
  return (
        <div>
        <input value={searchValue} onChange={updateValues}/>
      </div>
  )
}

export default Filter
