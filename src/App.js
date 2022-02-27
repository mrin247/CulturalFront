import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components

import { Header } from "./components/Header";
import PrivateRoute from "./components/HOC/privateRoute";
import { ResetPassword } from "./components/Reset-Password";
import { ArtistsPage } from "./pages/artistsPage";
import { BlogsPage } from "./pages/blogsPage";
import { BooksPage } from "./pages/booksPage";
import { CartPage } from "./pages/cartPage";
import { CheckoutPage } from "./pages/checkoutPage";
import { FashionPage } from "./pages/fashionPage";
import { GroceryPage } from "./pages/groceryPage";
import { HandloomsPage } from "./pages/handloomsPage";
import { HomeNeedsPage } from "./pages/homeNeedsPage";
import { HomePage } from "./pages/homePage";
import { JewelsPage } from "./pages/jewelleryPage";
import { LifeStylePage } from "./pages/lifestylePage";
import { MedicinePage } from "./pages/medicinePage";
import { Product } from "./pages/productPage";
import { PujaPage } from "./pages/pujaPage";
import { ToysPage } from "./pages/toysPage";
import { TravelPage } from "./pages/travelPage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/authActions";
import { updateCart } from "./actions/cartActions";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   console.log("App.js - updateCart");
  //   dispatch(updateCart());
  // }, [auth.authenticate]);

  return (
    <Router>
      <Fragment>
        <Routes>
          

          <Route exact path="/checkout" element={<PrivateRoute />}>
            <Route exact path="/checkout" element={<CheckoutPage />} />
          </Route>

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/artists" element={<ArtistsPage />} />
          <Route exact path="/jewelleries" element={<JewelsPage />} />
          <Route exact path="/travels" element={<TravelPage />} />
          <Route exact path="/blogs" element={<BlogsPage />} />
          <Route exact path="/medicines" element={<MedicinePage />} />

          <Route exact path="/home-needs" element={<HomeNeedsPage />} />
          <Route exact path="/grocery" element={<GroceryPage />} />
          <Route exact path="/fashion" element={<FashionPage />} />
          <Route exact path="/books-&-magazines" element={<BooksPage />} />
          <Route exact path="/handlooms" element={<HandloomsPage />} />
          <Route exact path="/lifestyle" element={<LifeStylePage />} />
          <Route exact path="/puja-samagrhi" element={<PujaPage />} />
          <Route exact path="/toys-&-more" element={<ToysPage />} />
          <Route exact path="/p/:productId" element={<Product />} />

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
