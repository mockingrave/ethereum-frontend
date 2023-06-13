import React from "react";
import Certificate from "pages/certificate";
import Search from "pages/search";
import Accreditor from "pages/accreditorControl";
import AccreditorCertifier from "pages/accreditorControl";//TODO
import Certifier from "pages/certifierControl";
import Error404 from "pages/test";
import Page404 from "pages/page404";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default () => (
    <Router>
        <GlobalStyles/>
        <Switch>
            <Route exact path='/' component={Certificate}/>
            <Route exact path='/certificate' component={Certificate}/>
            <Route exact path='/search' component={Search}/>
            <Route exact path='/accreditor' component={Accreditor}/>
            <Route exact path='/accreditorCertifier' component={AccreditorCertifier}/>
            <Route exact path='/certifier' component={Certifier}/>
            <Route exact path='/error404' component={Error404}/>
            <Route component={Page404}/>
        </Switch>
    </Router>
);
