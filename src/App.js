import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import "./App.css"
import Order from "./Component/Order";
import DATA from "./utils/data.json"
import { useDispatch } from "react-redux";
import { addItem } from "./features/itemSlice";
import ProductList from "./Component/ProductList";
import Loader from "./Component/Loader";


function App() {

  const dispatch = useDispatch();

  const [loader,setLoader] = useState(false)

  useEffect(() => {
    console.log(DATA.products)
    dispatch(addItem(DATA.products))
  }, [])

  return (
    <div>
      <Header />
      <Order />
      {loader ? <Loader /> : <ProductList setLoader={setLoader}/>}      
    </div>
  )
}

export default App;
