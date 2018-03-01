import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {scrollHeader} from './action/action';
import registerServiceWorker from './registerServiceWorker';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {getBlogs} from './action/action';
import blogApp from './reducer/reducer';

import ReduxThunk from 'redux-thunk';

const store = createStore(blogApp,applyMiddleware(ReduxThunk));

store.dispatch(getBlogs());

document.addEventListener('scroll',function(e){
    if(document.body.scrollTop>0){
        store.dispatch(scrollHeader('show'))
    }else {
        store.dispatch(scrollHeader('hide'))
    }
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
