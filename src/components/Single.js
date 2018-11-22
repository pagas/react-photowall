import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const {match, posts, comments} = this.props;
        const postId =  Number(match.params.id);
        const post = posts.find(post => post.id === postId);
        const postComments = comments[postId] || [];
        const index = this.props.posts.findIndex(post => post.id === postId);
        return <div className='single-photo'>
            <Photo post={post} {...this.props} index={index}/>
            <Comments addComment={this.props.addComment} comments={postComments} postId={postId}/>
        </div>;
    }
}

export default Single