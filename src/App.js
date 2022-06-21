import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState([])

  const addNumber = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already in the Phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }
    const newPersonsObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newPersonsObject));
    setNewName("");
    setNewNumber("");
  };

  const newPersonName = (event) => {
    setNewName(event.target.value);
  };

  const newPersonNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const searchNumbers = (event) => {
    setQuery(event.target.value);
  };

  const getFilteredPersons = (query, persons) =>
    !query
      ? persons
      : persons.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );

  const filteredPersons = getFilteredPersons(query, persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filtered numbers shown with: <input value={query} onChange={searchNumbers} />
      </div>
      <h3>Add a new number</h3>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={newPersonName} />
        </div>
        <div>
          {" "}
          number: <input value={newNumber} onChange={newPersonNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
