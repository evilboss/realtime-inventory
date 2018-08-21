import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './js/reducers/reducer'
import Main from "./js/components/Main";
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <Main/>
    </Provider>
);
export default App;