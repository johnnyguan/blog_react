import {combineReducers} from 'redux';
import {SCROLL_HEADER, HIDE_MENU} from '../action/action';

const initialState = {
    headhide: 'hide',
    menuShow: 'show'
};

function headerShow(state = initialState.headhide, action){
    switch(action.type){
        case SCROLL_HEADER:
            return action.show
        default:
            return state;
    }
}
function menuShow(state = initialState.menuShow, action){
    switch(action.type){
        case HIDE_MENU:
            return action.hide
        default:
            return state;
    }
}
const blogApp = combineReducers({
    headerShow,
    menuShow
})
export default blogApp;
