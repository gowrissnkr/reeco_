const Order = () => {
    return (
        <div className="orderContainer">
            <div>
                <p className="orderDetails"><span>Orders</span><span>^</span><span>Orders</span></p>
            </div>
            <div className="orderRightSide">
                <h3>Order 32457ABC</h3>
                <div>
                    <button>Back</button>
                    <button>Approve Order</button>
                </div>
            </div>
        </div>
    )
}

export default Order