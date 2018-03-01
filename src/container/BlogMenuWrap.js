import BlogMenu from '../component/Menu';
import {connect} from 'react-redux';
import {hideMenu} from '../action/action';

const mapStateToProps = (state, ownProps) => {
    return {
        className: state.menuShow === 'hide'?'menu-wrap menu-close':'menu-wrap'
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: ()=>{
            dispatch(hideMenu('hide'))
        }
    }
};

const BlogMenuWrap = connect(mapStateToProps, mapDispatchToProps)(BlogMenu);
export default BlogMenuWrap;