import axios from './axios';

const fetchData = (path) => {
    return axios.get(path)
    .then(response => {
      return response.data;
    }).catch(err => {
      console.log(err);
    });
}

export { fetchData }