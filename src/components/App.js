import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "../redux/actions";
// load fix to load router with redux
import {withRouter} from 'react-router-dom';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}
function mapDispatchToPros(dispatch) {
    // shorthand this.props.dispatch
    return bindActionCreators(actions, dispatch);
}
const App = withRouter(connect(mapStateToProps, mapDispatchToPros)(Main));
export default App;