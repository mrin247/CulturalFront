import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components

import { Header } from "./components/Header";
import { ResetPassword } from "./components/Reset-Password";
import { HomePage } from "./pages/homePage";

function App() {
  return (
    // <>
    //   <Header />
    //   <HomePage />
    // </>
    
    <Router>
      <Fragment>
        <Routes>
          {/* <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route>
          <Route exact path="/products" element={<PrivateRoute />}>
            <Route exact path="/products" element={<Products />} />
          </Route>
          <Route exact path="/products/:productId" element={<PrivateRoute />}>
            <Route exact path="/products/:productId" element={<Product />} />
          </Route>
          <Route exact path="/customers" element={<PrivateRoute />}>
            <Route exact path="/customers" element={<Customers />} />
          </Route>
          <Route exact path="/orders" element={<PrivateRoute />}>
            <Route exact path="/orders" element={<Orders />} />
          </Route> */}

          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/reset-password/:resetToken"
            element={<ResetPassword />}
          />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
