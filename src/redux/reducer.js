import postsData from '../data/posts';
import {combineReducers} from 'redux';

function comments(state = [], action ) {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                return {...state, [action.postId]: [action.comment]};
            } else {
                return {...state, [action.postId]: [...state[action.postId], action.comment]};
            }
        default:
            return state;
    }
}

function posts(state = postsData, action ) {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.post]);
        case 'REMOVE_POST':
            return state.filter(s => s.id !== action.postId);
        default:
            return state;
    }
}
const rootReducer = combineReducers({posts, comments})

export default rootReducer