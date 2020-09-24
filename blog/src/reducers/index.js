import { combineReducers } from 'redux';
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

// One component to hold all of our reducers that will be created //
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
})