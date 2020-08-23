import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from "./pages/Login/index";
import Home from "./pages/Home/index";

// import NewIncident from './pages/NewIncident/index';

export default function Routes(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
}