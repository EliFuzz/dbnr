import React from "react";

import { Route } from "react-router-dom";

import Home from "Pages/Home";
import User from "Pages/User";

const router = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/user" component={User} />
  </div>
);

export default router;
