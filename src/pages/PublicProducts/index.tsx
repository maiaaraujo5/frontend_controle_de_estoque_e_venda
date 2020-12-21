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
                    <Product title="Bolsa de Mulher" category="Bolsas" description="Bolsa muito bonita" amount={123.60}
                             oldAmount={315.99}/>
                </AnimationContainer>
                <Product title="Bolsa de Mulher" category="Bolsas" description="Bolsa muito bonita" amount={123.60}
                         oldAmount={315.99} badge="liquidação"/>
                <Product title="Bolsa de Mulher" category="Bolsas" description="Bolsa muito bonita" amount={123.60}
                         oldAmount={315.99}/>
                <Product title="Bolsa de Mulher" category="Bolsas" description="Bolsa muito bonita" amount={123.60}
                         oldAmount={315.99} badge="MAIS VENDIDO"/>
                <Product title="Bolsa de Mulher" category="Bolsas" description="Bolsa muito bonita" amount={123.60}
                         oldAmount={315.99}/>
                <Product title="Bolsa de Mulher" category="Bolsas" description="Bolsa muito bonita" amount={123.60}
                         oldAmount={315.99}/>
                <Product title="Bolsa de Mulher" category="Bolsas" description="Bolsa muito bonita" amount={123.60}
                         oldAmount={315.99}/>
            </ProductsContainer>
        </>
    )
};

export default PublicProducts;