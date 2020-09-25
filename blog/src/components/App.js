import React from 'react';
import PostList from './PostList'
import ReactTable from "react-table";  

// One component to rule them all and render inside the root index.js//
const App = () => {
    return <div className=" ui container">
        <PostList />
    </div>
}
export default App
