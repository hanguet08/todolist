import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { rootReducer } from './redux/reducer/rootReducer'

import App from "./App";
const store=createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store = { store } >
    <React.StrictMode >
    <
    App / >
    </React.StrictMode> </Provider>
);