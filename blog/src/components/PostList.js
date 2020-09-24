import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render () {
        console.log("this: " + this.props)
        return <div>Post List</div>
    }
}

const mapStateToProps = state => {
    return { posts: state.post };
}

export default connect( 
    mapStateToProps, 
    { fetchPosts } 
) (PostList);