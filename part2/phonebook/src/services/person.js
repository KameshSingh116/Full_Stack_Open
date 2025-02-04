// services/persons.js
import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

// ... other functions ...

const update = (id, updatedPerson) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson);
};

export default { getAll, create, update, remove };
