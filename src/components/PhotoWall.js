import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props) {
    console.log('photowall', props)
    return <div>
        <Link className="addIcon" to="/addPhoto">Add Photo</Link>

        <div className="photoGrid">
            {props.posts
                .sort((x,y) => {
                    return y.id - x.id;
                })
                .map((post, index) => <Photo key={index} post={post} {...props}/>)}
        </div>
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall