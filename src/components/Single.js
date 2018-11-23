import React, {Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    componentDidMount() {
        const {match} = this.props;
        const postId =  Number(match.params.id);
        this.props.startLoadingComments(postId);
    }
    render() {
        const {match, posts} = this.props;
        const postId =  Number(match.params.id);
        const post = posts.find(post => post.id === postId);
        const index = this.props.posts.findIndex(post => post.id === postId);

        return <div className='single-photo'>
            <Photo post={post} {...this.props} index={index}/>
            {this.props.comments.length &&
                <Comments startAddingComment={this.props.startAddingComment} comments={this.props.comments} postId={postId}/>
            }
        </div>;
    }
}

export default Single