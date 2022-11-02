import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseItemQTy, emptyCartItems, increaseItemQty, removeItemFromCart } from "../../Redux/Actions/actions";
import "./Cart.css"

function CartPage() {
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(0)

    const cartItems = useSelector((state) => state.allProducts.cart)
    useEffect(() => {
        let count = 0;
        cartItems.map((item) => {
            return count += item.qty
        })
        setCartCount(count)
    }, [cartItems, cartCount])


    let totalAmount = [];
    const amount = cartItems.map((item, i) => {
        return (
            totalAmount.push(item.qty * item.price)
        )
    })
    const total = totalAmount.reduce((acc, index) => {
        return acc + index
    }, 0)


    const increaseItem = (event) => {
        dispatch(increaseItemQty(event.target.id, event.target.name))
    }
    const decreaseItem = (event) => {
        if (event.target.name > 1) {
            dispatch(decreaseItemQTy(event.target.id, event.target.name))
        }
        else {
            dispatch(removeItemFromCart(event.target.id))
        }
    }
    const removeItem = (event) => {
        dispatch(removeItemFromCart(event.target.id))
    }
    const emptyCart = () => {
        dispatch(emptyCartItems([]))
    }
    return (
        cartItems.length === 0 ? (<div style={{
            paddingTop: "60px",
            marginBottom: "60px",
            textAlign: "center"
        }} className="order-confirm">
            <h3 style={{ marginTop: "13%" }}>Your Cart is Empty</h3>
            <Link id="link" to="/"> <button style={{ marginTop: "20px" }} className="place-order">Shop Now</button></Link>
        </div>) : (
            <section id="cart">
                <h1>Checkout</h1>
                <div className="cart-container">
                    <div className="left-side">
                        <p>Total Items: <span id="number-of-item">{cartCount}</span></p>
                        <div className="cart-items" id="cart-item-container">
                            {cartItems.map((item, i) => {
                                const amount = item.qty * item.price
                                totalAmount.push(amount)
                                return (
                                    <div className="item" key={i}>
                                        <img src={item.image} alt="" />
                                        <div className="detail">
                                            <h3>{item.title} </h3>
                                            <p>x{item.qty}</p>
                                            <p>Amount: {Math.round(amount)}</p>
                                        </div>
                                        <div id="button">
                                            <button id={item.id} name={item.qty} className="place-order" onClick={increaseItem}>+</button>
                                            <button id={item.id} name={item.qty} className="place-order" onClick={decreaseItem}>-</button>
                                            <button id={item.id} name={item.qty} className="remove" onClick={removeItem}>Remove</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="total-amount">
                            <h2>Total Amount</h2>
                            <p>Total Amount: Rs <span id="total-amount">{Math.round(total)}</span></p>
                            <Link id="link" to="/orderPage"><button id="place-order" onClick={emptyCart}>Place Order</button> </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    )
}

export default CartPage