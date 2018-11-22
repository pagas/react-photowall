import React, {Component} from 'react';


class Comments extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(event.target.elements.comment.value, this.props.postId);
        event.target.elements.comment.value = '';
    }
    render() {
        return <div className="comment">
            {
                this.props.comments.map((comment, index) => {
                    return <p key={index}>{comment}</p>
                })
            }

            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input name="comment" type="text" placeholder="Comment"/>
                <input type="submit" hidden/>
            </form>
        </div>;
    }
}

export default Comments