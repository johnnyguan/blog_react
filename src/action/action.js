/* 
 * action types
 */
export const SCROLL_HEADER = 'SCROLL_HEADER';
export const HIDE_MENU = 'HIDE_MENU';

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
        hide: hide
    }
}