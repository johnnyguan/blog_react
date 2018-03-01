import { connect } from 'react-redux';
import Header from '../component/Header';
import { hideMenu } from '../action/action';

const mapStateToProps = (state, ownProps) => {
    return {
        className: state.headerShow==='hide'?'header hide':'header'
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(hideMenu('show'));
        }
    }
};
const HeaderWrap = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderWrap;