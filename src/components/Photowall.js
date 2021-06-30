import React from 'react';
import PropTypes from 'prop-types'
import Post from './Post';
// import firebase from 'firebase'

function Photowall(props) {
    // console.log(props.posts);
    return (
        <div className = "container mx-auto max-w-4xl mt-9">
            <div className = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-5">
                {props.posts
                .sort(function(x,y){
                    return y.id - x.id
                })
                .map((post, index) => <Post key = {index} post = {post} index = {index} isRemovable = {'yes'} {...props}  /> )}
            </div>
        </div>
    );
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
  }
export default Photowall