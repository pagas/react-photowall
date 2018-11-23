import {combineReducers} from 'redux';

function comments(state = [], action ) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return state.concat([{comment: action.comment, postId: action.postId}]);
        case 'LOAD_COMMENTS':
            return action.comments;
        default:
            return state;
    }
}

function posts(state = [], action ) {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.post]);
        case 'REMOVE_POST':
            return state.filter(s => s.id !== action.postId);
        case 'LOAD_POSTS':
            return action.posts;
        default:
            return state;
    }
}
const rootReducer = combineReducers({posts, comments})

export default rootReducer