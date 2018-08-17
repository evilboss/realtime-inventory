import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './js/reducers/reducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Main from "./js/components/Main";
import DashboardPage from "views/Dashboard";
const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Main/>
        </MuiThemeProvider>
    </Provider>
);

export default App;
