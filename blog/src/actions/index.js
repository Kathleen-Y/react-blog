import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholders'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
   const userIds =  _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach( id => dispatch(fetchUser(id)))
}

// A function to makes a post request to 'FETCH_POSTS' from the api jsonPlaceholders //
export const fetchPosts = () =>  async ( dispatch ) => {
        const response =  await jsonPlaceholder.get('/posts')
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }

// A function to makes a post request to 'FETCH_USERS' based on user id that is passed in from the api jsonPlaceholders //
export const fetchUser = (id) =>  async ( dispatch ) => {
    const response =  await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
}
