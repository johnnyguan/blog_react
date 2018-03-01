import {connect} from 'react-redux';
import MainComp from '../component/MainComp';

const mapStateToProps = (state, ownProps)=>{
    return {
        className: state.menuShow === 'hide'? 'main-comp expanded' : 'main-comp'
    }
};

const MainCompWrap = connect(mapStateToProps)(MainComp);
export default MainCompWrap;