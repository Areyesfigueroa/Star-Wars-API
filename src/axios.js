import axios from 'axios';

const instance = axios.create({
    baseURL: "https://swapi.dev/api/"
});

instance.interceptors.request.use(request => {
    // console.log(request);
    return request;
});

export default instance;