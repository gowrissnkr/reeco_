import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/actions";
import "./product.css"

function ProductDetails() {

    const dispatch = useDispatch();

    const Product = useSelector((state) => state.allProducts.productdetails)


    const addItem = (event) => {
        dispatch(addToCart(event.id))
    }

    return (
        Product === undefined ? <h1>....LOading</h1> :
            <section id="product">
                <div className="left-column">
                    <img id="productImg" src={Product.image} alt="" />
                </div>
                <div className="right-column">
                    <div className="product-description">
                        <h1 id="name">{Product.name}</h1>
                        <h4 id="brand">{Product.brand}</h4>
                        <h3>Price: Rs <span id="price">{Product.price}</span></h3>
                        <div className="description">
                            <h3>Description</h3>
                            <p id="description">{Product.description}</p>
                        </div>
                        <div className="product-preview">
                            <h3>Product Preview</h3>
                            <div className="previewImg">
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <button id="add-to-cart" onClick={() => { addItem(Product)}}>Add to Cart</button>
                    </div>
                </div>
            </section>
    )
}

export default ProductDetails