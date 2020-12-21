import React from "react";
import {Container, Badge, Image, Details, Category, Title, Description, Bottom, Price, Links} from "./styles";
import {Link} from "react-router-dom";
import {AiOutlineHeart, FaCartPlus} from "react-icons/all";

const Product: React.FC = () => {
    return (
        <Container>
            <Badge>Liquidação</Badge>
            <Image>
                <img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
            </Image>
            <Details>
                <Category>Bolsas</Category>
                <Title>Bolsa de Mulher</Title>
                <Description>Este é um produto muito bonito, todos deveriam compra</Description>
                <Bottom>
                    <Price><small>R$120,99</small>R$80,99</Price>
                    <Links>
                        <Link to=""><AiOutlineHeart/></Link>
                        <Link to=""><FaCartPlus/></Link>
                    </Links>
                </Bottom>
            </Details>
        </Container>
    )
};

export default Product;