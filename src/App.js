import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonsForm";
import SearchFilter from "./components/SearchFilter";

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
        person.name.toLowerCase().includes(query))
    ;

  const filteredPersons = getFilteredPersons(query, persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter onChange={searchNumbers} />
      <h3>Add a new number</h3>
      <PersonForm
        onSubmit={addNumber}
        value={newName}
        onNameChange={newPersonName}
        input
        numValue={newNumber}
        onNumChange={newPersonNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}>
        {" "}
      </Persons>
    </div>
  );
};

export default App;
