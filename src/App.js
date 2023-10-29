import React, { useEffect } from "react";
import Header from "./Component/Header";
import "./App.css"
import Order from "./Component/Order";
import DATA from "./utils/data.json"
import { useDispatch } from "react-redux";
import { addItem } from "./features/itemSlice";
import ProductList from "./Component/ProductList";


function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    console.log(DATA.products)
    dispatch(addItem(DATA.products))
  }, [])

  return (
    <div>
      <Header />
      <Order />
      <ProductList/>     
    </div>
  )
}

export default App;
