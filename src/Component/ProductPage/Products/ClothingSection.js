import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productDetails } from "../../../Redux/Actions/actions";


function ClothingSection() {


    const dispatch = useDispatch();
    const Products = useSelector((state) => state.allProducts.products)

    const fetchingProductDetails = (product) => {
        dispatch(productDetails(product))
    }


    return (
        <section id="clothing">
            {/* <!-- Cards Conatiner --> */}
            <div className="card-conatiner" id="clothingCards">
                {Products.map((product, i) => {

                    return (
                        <div className="card" id={i} key={i} onClick={() => fetchingProductDetails(product)}>
                            <Link id="link" to="/productDetails">
                                <div className="img"><img src={product.image} alt={product.title} />
                                </div>
                                <div className="details">
                                    <h3>{product.title}</h3>
                                    <h4>{product.category}</h4>
                                    <h5>Rs {product.price}</h5></div>
                            </Link>
                        </div>
                    )

                })
                }
            </div>
        </section>
    )
}
export default ClothingSection