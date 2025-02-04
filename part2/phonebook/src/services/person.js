// services/persons.js
import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

// ... other functions ...

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, remove };
