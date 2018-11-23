import {database} from '../database/config';

export function startAddingPost(post) {
    return (dispatch) => {
        return database.collection('posts').doc(post.id.toString()).set(post).then(() => {
            dispatch(addPost(post));
        });
    }
}

export function startRemovingPost(postId) {
    return (dispatch) => {
        return database.collection('posts').doc(postId.toString()).delete().then(() => {
            dispatch(removePost(postId));
        });
    }
}

export function startLoadingPost() {
    return (dispatch)=> {
        return database.collection('posts').get().then((querySnapshot) => {
            const posts = [];
            querySnapshot.forEach(doc => {
                posts.push(doc.data())
            })

            dispatch(loadPosts(posts));
        })
    }
}

export function startLoadingComments(postId) {
    return (dispatch)=> {
        return database.collection('comments').where('postId', '==', postId).get().then((querySnapshot) => {
            const comments = [];
            querySnapshot.forEach(doc => {
                comments.push(doc.data())
            })

            dispatch(loadComments(comments));
        })
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.collection('comments').add({comment: comment, postId: postId}).then(() => {
            dispatch(addComment(comment, postId));
        });
    }
}

export function removePost(postId) {
    return {
        type: 'REMOVE_POST',
        postId
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}
export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}
