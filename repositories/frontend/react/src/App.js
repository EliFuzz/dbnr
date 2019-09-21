import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Layout from "Components/Layout";
import store from "configureStore";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
);

export default App;
