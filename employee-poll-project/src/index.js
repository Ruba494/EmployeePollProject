import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";
import middelware from "./middelware";
import {BrowserRouter} from "react-router-dom";

const store = createStore(reducer,middelware)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

);