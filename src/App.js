import React from "react";
import "./App.css"
import Header from "./Component/Header/Header";
import ProductPage from "./Component/ProductPage/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./Component/ProductDetailsPage/ProductDetails";
import CartPage from "./Component/CartPage/CartPage";
import OrderPage from "./Component/OrderPage/OrderPage";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/"
        element={<ProductPage/>} />
      <Route exact path="/productDetails"
        element={<ProductDetails/>} />
      <Route exact path="/cartPage"
        element={<CartPage/>} />
      <Route exact path="/orderPage"
        element={<OrderPage/>} />     
      </Routes>
    </BrowserRouter>
  )
}

export default App;
