import { database } from "../database/config"

// remove

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: [post]}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapShot) => {
            let posts = []
            snapShot.forEach((childSnapShot) => {
                posts.push(childSnapShot.val()[0])
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPost(index, id) {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        })
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        })
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapShot) => {
            let comments = {}
            snapShot.forEach((childSnapShot) => {
                comments[childSnapShot.key] = Object.values(childSnapShot.val())
            })
            dispatch(loadComments(comments))
        })
    }
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export function removePost(index) {
    return{
        type:'REMOVE_POST',
        index,
        
    }
}

export function addPost(post) {
    return{
        type:'ADD_POST',
        post,
    }
}
export function addComment(comment, postId) {
    return{
        type:'ADD_COMMENT',
        comment,
        postId,
    }
}
// export function addPost(post) {
//     return{
//         type:'ADD_POST',
//         post,
//     }
// }
