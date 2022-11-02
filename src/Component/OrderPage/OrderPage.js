import React from "react";
import "./OrderPage.css"

function OrderPage() {
    return (
        <div class="order-confirm">
            <img src="https://shoplane.netlify.app/img/img_confirm.png" alt="Confirm" />
            <h3>Order Placed Successfully!!</h3>
            <p>We have sent you an email with the order details</p>
        </div>
    )
}

export default OrderPage