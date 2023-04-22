import React from 'react';
import './PostArea.css'
import Comment from './Comment';
import Post from './Post';

const PostArea = (props)=> {
    return (
        <div className='postArea'>
         <Comment/>
         <Post/>
        </div>
    );
}

export default PostArea;