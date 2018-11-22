import {database} from '../database/config';

export function startAddingPost(post) {
    return (dispatch) => {
        return database.collection('posts').doc(post.id.toString()).set(post).then(() => {
            dispatch(addPost(post));
        });
    }
}

export function startUpdatingPost(post) {
    return (dispatch) => {
        return database.collection('posts').doc(post.id).update(post);
    }
}

export function startRemovingPost(postId) {
    return (dispatch) => {
        return database.collection('posts').doc(postId).delete().then(() => {
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
