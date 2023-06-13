import React from "react";
import {createRoot} from "react-dom";
import App from "./App";
import QAPI from "qapi";

window.QAPI = QAPI;
createRoot(document.getElementById('root')).render(<App />);
