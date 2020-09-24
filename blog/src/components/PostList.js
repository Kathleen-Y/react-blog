import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';

// component that will render the data from jsonPlaceholders Api
class PostList extends React.Component {
    // When the component first appears on screen it will instantly call the api using the fetchPosts function //
    componentDidMount(){
        // this.props.fetchPosts();
        this.props.fetchPostsAndUsers();
    }
    
    renderList() {
        return this.props.posts.map( post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }
    // What gets rendered to the screen //
    render () {
        return <div className=" ui relaxed divided list"> {this.renderList()}</div>
    }

}
// create a mapStateToProps function to include posts into the newly rendered value of state //
const mapStateToProps = state => {
    return { posts: state.posts };
}

// exports the component and the stated variable by connecting it with redux //
export default connect( mapStateToProps, { fetchPostsAndUsers } ) (PostList);
