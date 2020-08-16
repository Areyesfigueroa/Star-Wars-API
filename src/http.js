import axios from './axios';

const fetchPeople = (page) => {
  const query = page.length === 0 ? `people/`:`people/?page=${page}`;

  return axios.get(query)
    .then(response => {
      return response.data;
    }).catch(err => {
      console.log(err);
    });
}

const fetchData = (path) => {
  return axios.get(path)
    .then(response => {
      return response.data;
    }).catch(err => {
      console.log(err);
    });
}

const fetchHomeworld = (id) => {
  const query = id ? `planets/${id}/`: "planets/";

  return axios.get(query)
    .then(response => {
      return response.data;
    }).catch(err => {
      console.log(err);
    });
}

const fetchSpecies = (id) => {
  const query = id ? `species/${id}/`: "species/";

  return axios.get(query)
    .then(response => {
      return response.data;
    }).catch(err => {
      console.log(err);
    });
}

export { fetchPeople, fetchHomeworld, fetchSpecies, fetchData }