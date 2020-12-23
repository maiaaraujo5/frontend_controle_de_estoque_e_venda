import React from "react";
import {Container, Badge, Image, Details, Category, Title, Description, Bottom, Price, Links} from "./styles";
import {Link} from "react-router-dom";
import {AiOutlineHeart, FaCartPlus} from "react-icons/all";

interface Props {
    title: string
    description: string
    category: string
    oldAmount?: number
    amount: number
    badge?: string
}

const Product: React.FC<Props> = ({title, description,category, oldAmount, amount, badge}) => {
    return (
        <Container>
            {badge && <Badge>{badge}</Badge>}
            <Image>
                <img src="https://i.imgur.com/xdbHo4E.png" alt=""/>
            </Image>
            <Details>
                <Category>{category}</Category>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Bottom>
                    <Price>{oldAmount && <small>R${oldAmount}</small>}R${amount}</Price>
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