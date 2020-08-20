import axios from './axios';

const homeWorldCache = [];
const speciesCache = [];

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

const getCachedData = (url, cache) => {
  if(cache.length === 0) return null;

  let res = cache.filter(el => el.url === url);

  //If it does return that object. 
  return res.length > 0 ? res[0]: null;
}

const fetchHomeworld = (url) => {
  let homeworld = getCachedData(url, homeWorldCache);
  
  if(homeworld) {
    return homeworld;
  } else {
    return axios.get(url)
      .then(response => {
        console.log("API Calls");

        const newObj = {url: url, name: response.data.name};
        homeworld = getCachedData(url, homeWorldCache);
        if(!homeworld) homeWorldCache.push(newObj);

        return newObj;
      }).catch(err => {
        console.log(err);
      });
  }
}

const fetchSpecies = (url) => {
  let species = getCachedData(url, speciesCache);
  
  if(species) {
    return species;
  } else {
    return axios.get(url)
      .then(response => {
        console.log("API Calls");

        const newObj = {url: url, name: response.data.name};
        species = getCachedData(url, speciesCache);
        if(!species) speciesCache.push(newObj);

        return newObj;
      }).catch(err => {
        console.log(err);
      });
  }
}

const fetchSearchResults = (search) => {
  const query = `people/?search=${search}`;

  return axios.get(query)
    .then(response => {
      return response.data;
    }).catch(err => {
      console.log(err);
    });
}

export { fetchPeople, fetchHomeworld, fetchSpecies, fetchData, fetchSearchResults }