import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Login from "./components/Login/index";
import Musica from "./components/Musica/index";
import Eu from "./components/Eu/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route path="/musica" component={Musica} />
      <Route path="/eu" component={Eu} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
