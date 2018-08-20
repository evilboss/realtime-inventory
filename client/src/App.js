import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './js/reducers/reducer'
import Main from "./js/components/Main";

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <Main/>
    </Provider>
);
export default App;