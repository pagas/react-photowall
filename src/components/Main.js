import React, {Component} from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Single from './Single';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.startLoadingPost();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        console.log('main', this.props);
        return <div>
            <h1><Link to={'/'}>PhotoWall</Link></h1>

            <Route exact path="/" render={() => (
                <div>
                    <PhotoWall {...this.props}/>
                </div>
            )}/>

            <Route path="/addPhoto" render={() => (
                <AddPhoto {...this.props} />
            )}/>

            <Route path="/single/:id" render={(params) => (
                <Single {...this.props} {...params}  />
            )}/>
        </div>
    }
}

export default Main;