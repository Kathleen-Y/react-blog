import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

// component that will render the data from jsonPlaceholders Api
class PostList extends React.Component {
    // When the component first appears on screen it will instantly call the api using the fetchPosts function //
    componentDidMount(){
        this.props.fetchPosts();
    }
    // What gets rendered to the screen //
    render () {
        console.log("this: " + this.props.posts)
        return <div>Post List</div>
    }

}
// Declares a variable to store what we want to reduce to state //
const mapStateToProps = state => {
    return { posts: state.post };
}

// exports the component and the stated variable by connecting it with redux //
export default connect( 
    mapStateToProps, 
    { fetchPosts } 
) (PostList);
