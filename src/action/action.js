import axios from 'axios';
/* 
 * action types
 */
export const SCROLL_HEADER = 'SCROLL_HEADER';
export const HIDE_MENU = 'HIDE_MENU';
export const GET_BLOGS = 'GET_BLOGS';
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';

/* 
 * action creators
 */
export function scrollHeader(show){
    return {
        type: SCROLL_HEADER,
        show
    }
}
export function hideMenu(hide){
    return {
        type: HIDE_MENU,
        hide
    }
}
export function getBlogs(){
    return dispatch => {
        axios.get('http://192.168.56.1:8080/blog.json').then((res)=>{
            dispatch(receiveBlogs(res.data))
        })
    };             

}
export function receiveBlogs(blogs){
    return {
        type: RECEIVE_BLOGS,
        blogs
    }
}