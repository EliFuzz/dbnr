import React from "react";
import { Link } from "react-router-dom";

const navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
    </ul>
  </nav>
);

export default navigation;
