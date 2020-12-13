import React from "react";

import Header from "../../components/Header";
import Product from "../../components/Product";

import {ProductsContainer} from "./styles";

const Dashboard: React.FC = () => {

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
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
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

export default Dashboard;