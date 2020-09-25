import axios from 'axios';

// axios call to the location of the json data//
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// pseudo to why the issue, ideas.
// is the issue with exporting this page?
//     or with the fact that this json is a tester not a real REST API, 
//     and it returns "undefined" meaning that somthing is coming through but not the product bc it has not produce to return?....
