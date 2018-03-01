import {connect} from 'react-redux';
import Main from '../component/Main';

const mapStateToProps = (state, ownProps)=>{
    return {
        blogs: state.blogs
    }
};

const MainWrap = connect(mapStateToProps)(Main);
export default MainWrap;