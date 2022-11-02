import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css"


function Header() {
  const cartItems = useSelector((state) => state.allProducts.cart)
  const [cartCount, setCartCount] = useState(0)


  useEffect(() => {
    let count = 0;
    cartItems.map((item) => {
      return count += item.qty
    })
    setCartCount(count)
  }, [cartItems, cartCount])

  return (
    <div id="top-bar">
      {/* <!-- Logo --> */}
      <div className="logo">
        <Link id="link" to="/"><h4><span>Home</span></h4></Link>
      </div>

      {/* <!-- Icons --> */}
      <div className="icons">
        <div className="cart" id="cartIcon">
          <Link id="link" to="/cartPage">
            <i className="fa fa-shopping-cart">
              <span id="cart-count">{cartCount}</span>
            </i>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Header