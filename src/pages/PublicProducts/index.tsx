import React from "react";

import Header from "../../components/Header";

import {AnimationContainer, ProductsContainer} from "./styles";
import Product from "../../components/Product";

const PublicProducts: React.FC = () => {

    const menuOptions = [
        {
            name: "Colares",
            url: "colares"
        },
        {
            name: "Brincos",
            url: "brincos"
        },
        {
            name: "Aneis",
            url: "aneis"
        },
        {
            name: "Pulseiras",
            url: "pulseira"
        }
    ];
    return (
        <>
            <Header menuOptions={menuOptions}/>
            <ProductsContainer>
                <AnimationContainer>
                    <Product/>
                </AnimationContainer>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
            </ProductsContainer>
        </>
    )
};

export default PublicProducts;