import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "041-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
  console.log(newName);
  console.log(persons);

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
