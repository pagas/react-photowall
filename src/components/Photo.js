import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

function Photo(props) {
    const post = props.post;
    return <figure className="figure">
        <Link to={`/single/${post.id}`}>
            <img className="photo" src={post.imageLink} alt={post.description}/>
        </Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button className="remove-button" onClick={() => {
                props.startRemovingPost(post.id);
                props.history.push('/');
            }}>Remove</button>
            <Link to={`/single/${post.id}`} className="button">
                {/*<div className="speech-bubble"></div>*/}
                <div className="comment-count">{props.comments[post.id] ? props.comments[post.id].length : 0}</div>
            </Link>
        </div>
    </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

export default Photo