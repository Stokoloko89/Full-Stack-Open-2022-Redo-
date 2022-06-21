import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonsForm";
import SearchFilter from "./components/SearchFilter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

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
      : persons.filter((person) => person.name.toLowerCase().includes(query));
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
      <Persons persons={filteredPersons}> </Persons>
    </div>
  );
};

export default App;
