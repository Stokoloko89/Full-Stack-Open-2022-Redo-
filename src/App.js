import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  console.log(persons)
  const [newName, setNewName] = useState('')


  const addNumber = (event) => {
    event.preventDefault()
    console.log(event)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { }
    </div>
  )
}

export default App