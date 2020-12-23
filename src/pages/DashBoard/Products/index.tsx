import React, {useCallback, useEffect, useRef, useState} from "react";
import {Container, Content, Products as ProductContainer, Search} from "./styles";
import {Aside} from "../global";
import SideBar from "../../../components/SideBar";
import Product from "../../../components/Product";
import SearchBar from "../../../components/SearchBar";

const Products: React.FC = () => {
    interface Products {
        name: string,
        description: string
        category: string
        amount: number
        oldAmount?: number
        badge?: string
    }

    const [fetchedProducts, setFetchProducts] = useState<Products[]>([]);
    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        async function fetchProducts(): Promise<void> {
            const products = [
                {
                    name: "Bolsa",
                    description: "Muito Linda",
                    category: "Bolsas",
                    amount: 120.50,
                    badge: "mais vendidos"
                },
                {
                    name: "Brinco",
                    description: "Muito Linda",
                    category: "Bolsas",
                    amount: 123.50,
                },
                {
                    name: "Colar",
                    description: "Muito Linda",
                    category: "Bolsas",
                    amount: 123.50,
                    badge: "PROMOÇÃO",
                    oldAmount: 250.99
                }
            ];

            setFetchProducts(products);
            setProducts(products)
        }

        fetchProducts()
    }, []);

    const filterProducts = (value: string) => {
        const filtered = fetchedProducts.filter(product => {
            return product.name.toLowerCase().includes(value.toLowerCase())
        });

        setProducts(filtered)
    };


    return (
        <Container>
            <Aside>
                <SideBar/>
            </Aside>
            <Content>
                <Search>
                    <SearchBar setKeyword={filterProducts}/>
                </Search>
                <ProductContainer>
                    {products.map((data, index) => (
                        <Product key={data.name + index} title={data.name}
                                 description={data.description}
                                 category={data.category}
                                 amount={data.amount}
                                 oldAmount={data.oldAmount}
                                 badge={data.badge}
                        />
                    ))}
                </ProductContainer>
            </Content>
        </Container>
    );
};

export default Products