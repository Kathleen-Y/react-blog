import jsonPlaceholder from '../apis/jsonPlaceholders'

// A function to makes a post request to 'FETCH_POSTS' from the api jsonPlaceholders //
export const fetchPosts = () =>  async ( dispatch ) => {
        const response =  await jsonPlaceholder.get('/posts')
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }
   