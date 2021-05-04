import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import "./index.css"

axios.defaults.baseURL = "https://baked-beans.herokuapp.com/api";
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
