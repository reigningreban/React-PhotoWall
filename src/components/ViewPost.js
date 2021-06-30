import React from "react"
import Post from "./Post"
import Comments from "./Comments"

class ViewPost extends  React.Component{
    render() {
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id )
        const comments = this.props.comments[id] || []
        if (this.props.loading === true) {
            return <div>Loading...</div>
        }else{
            return (
                <div className = "container mx-auto max-w-4xl mt-9">
                    <div className = "flex flex-box py-9">
                        <div className = "w-full md:w-1/2 lg:w-1/2 bg-white">
                            <Post post = {post} {...this.props}/>
                            
                        </div>
                        <div className = "bg-white w-full md:w-1/2 lg:w-1/2">
                            <Comments addComment = {this.props.addComment} startAddingComment = {this.props.startAddingComment} comments = {comments} id = {id} />
                        </div>
                    </div>
                    
                </div>
            );
        }
            
    }
}

export default ViewPost