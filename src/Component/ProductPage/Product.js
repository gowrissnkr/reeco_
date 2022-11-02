import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "../../Data/data.json"
import { setProducts } from "../../Redux/Actions/actions";
import ClothingSection from "./Products/ClothingSection";
import "./clothingsection.css"



function ProductPage() {
    const dispatch = useDispatch();
    const sampleData = data

    const fetchProducts = () => {
        dispatch(setProducts(sampleData));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ClothingSection />
    )
}

export default ProductPage;