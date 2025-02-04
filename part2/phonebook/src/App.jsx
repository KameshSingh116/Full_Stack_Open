// App.jsx
import React, { useState, useEffect } from 'react';
import personService from './services/person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = { name: newName, number: newNumber };
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already in the phonebook. Do you want to update their number?`
        )
      ) {
        personService
          .update(existingPerson.id, personObject)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : response.data
              )
            );
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => {
            console.error('Error updating person:', error);
          });
      }
    } else {
      personService
        .create(personObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          console.error('Error adding person:', error);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
