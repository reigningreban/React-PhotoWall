import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Remove(props) {
    const remove = props.isRemovable
    switch (remove) {
        case 'yes':
            return (
                <div className = "text-right mt-7">
                    <button className = "text-white focus:outline-none" onClick = {() => {
                        props.startRemovingPost(props.index, props.post.id)
                    }}>
                        <i className = "fas fa-times text-red-500 text-2xl"></i>
                    </button>
                </div>
            )
        
        default:
            return (
                <div></div>
            )
    }
}

function Post(props) {
    console.log(props);
    return (
            <div className="rounded overflow-hidden shadow-lg bg-white">
                <Link to={`/view/${props.post.id}`}>
                    <img src = {props.post.imageLink} alt = {props.post.description} />
                </Link>
                
                <div className="px-6 py-4">
                    <p className = "font-bold">
                        {props.post.description}
                    </p>
                    <div className = "grid grid-cols-2 gap-5">
                        <Link to={`/view/${props.post.id}`} className = "border flex">
                            <div className = "mx-auto my-auto">
                                <span className = "mr-4">{props.comments[props.post.id] ? props.comments[props.post.id].length : 0} </span>
                                <i className = "fas fa-comment"></i>
                            </div>
                        </Link>
                        <Remove {...props}/>
                    </div>
                    
                </div>
            </div>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
    }


export default Post