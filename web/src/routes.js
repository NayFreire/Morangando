import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from "./pages/Login/index";
// import Register from "./pages/Register/index";
// import Profile from "./pages/Profile/index";
// import NewIncident from './pages/NewIncident/index';

export default function Routes(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    );
}