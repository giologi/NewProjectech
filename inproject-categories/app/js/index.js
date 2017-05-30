import "../scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter, Route} from "react-router-dom";
import App from "./containers/App";
import store from "./store";

ReactDOM.render(
    (
        <Provider store={store}>
            <HashRouter>
                <Route path='/' component={App}/>
            </HashRouter>
        </Provider>
    ),
    document.getElementById('app')
);