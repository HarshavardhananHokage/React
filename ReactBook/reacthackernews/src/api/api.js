import axios from 'axios';

const API_BASE_PATH="https://hn.algolia.com/api/v1";
const SEARCH_PATH="/search";
const PARAM_QUERY="query=";
const PARAM_PAGE="page=";

let hackerNewsOnQuery = function(searchTerm) {
    const SEARCH_API_QUERY = `${API_BASE_PATH}${SEARCH_PATH}?${PARAM_QUERY}${searchTerm}`
    //console.log(SEARCH_API_QUERY);
    return axios(SEARCH_API_QUERY)
        .then(result => {return result.data});
}

let hackerNewsOnQueryPage = function(searchTerm, pageNo) {
    const SEARCH_API_QUERY = `${API_BASE_PATH}${SEARCH_PATH}?${PARAM_QUERY}${searchTerm}&${PARAM_PAGE}${pageNo}`
    console.log(SEARCH_API_QUERY);
    return axios(SEARCH_API_QUERY)
        .then(result => {return result.data});
}



/*const list = [
    {
        objectID: "12345",
        title: "Title 1",
        url: "http://www.google.com",
        author: "Test 1",
        points: 1234,
        num_comments: 12,
    },
    {
        objectID: "67890",
        title: "Title 2",
        url: "http://www.google.com",
        author: "Test 2",
        points: 5678,
        num_comments: 15,
    },
    {
        objectID: "98765",
        title: "Title 3",
        url: "http://www.google.com",
        author: "Test 3",
        points: 9012,
        num_comments: 35,
    }
];*/

//export default list;
export { hackerNewsOnQuery, hackerNewsOnQueryPage };