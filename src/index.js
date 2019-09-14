import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import createStore from './redux/store';
import {
    setCookie,
    getDataFromUrl
}
    from './utils'

let url = window.location.href;
let data = {}

if (url.indexOf('login') !== -1) {
    data = getDataFromUrl(url)
    setCookie("userName", data.first_name, { expires: 7 }) // ограничитель длины имени. ?:? фамилия
    setCookie("userPhoto", data.photo_url, { expires: 7 })
}

const store = createStore()

console.log(store.getState())
store.dispatch({
    type: 'SET_CURRENT',

})
console.log(store.getState())


ReactDOM.render(<BrowserRouter><App url={url} user={data} store={store}/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
