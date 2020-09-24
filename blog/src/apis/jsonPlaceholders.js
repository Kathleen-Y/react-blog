import axios from 'axios';

// axios call to the location of the json data//
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})