import { combineReducers } from 'redux';
import postsReducer from './postsReducer'

// One component to hold all of our reducers that will be created //
export default combineReducers({
    posts: postsReducer
})