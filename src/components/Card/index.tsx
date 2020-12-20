import {Container, Content, Image} from "./styles";
import React from "react";
import {FcMoneyTransfer} from "react-icons/all";
import {IconBaseProps} from "react-icons";

interface InputProps {
    icon: React.ComponentType<IconBaseProps>
    title: string
    value: string
}

const Card: React.FC<InputProps> = ({icon:Icon, title, value}) => {
    return (
        <Container>
            <Image>
               <Icon/>
            </Image>
            <Content>
                <p>{title}</p>
                <h1>{value}</h1>
            </Content>

        </Container>
    );
};

export default Card;