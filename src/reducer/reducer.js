import { combineReducers } from 'redux';
import { SCROLL_HEADER, HIDE_MENU, RECEIVE_BLOGS} from '../action/action';



const initialState = {
    headerShow: 'hide',
    menuShow: 'show',
    blogs: []
};

function headerShow(state = initialState.headerShow, action) {
    switch (action.type) {
        case SCROLL_HEADER:
            return action.show
        default:
            return state;
    }
}
function menuShow(state = initialState.menuShow, action) {
    switch (action.type) {
        case HIDE_MENU:
            return action.hide
        default:
            return state;
    }
}
function blogs(state = initialState.blogs, action) {
    switch (action.type) {
        case RECEIVE_BLOGS:
            return action.blogs;
        default:
            return state;
    }
}

const blogApp = combineReducers({
    headerShow,
    menuShow,
    blogs
})
export default blogApp;
