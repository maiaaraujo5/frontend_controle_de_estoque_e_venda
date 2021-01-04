import React from "react";
import {Container, Content} from "./styles";
import SideBar from "../../../components/SideBar";
import {Aside} from "../global";
import Table from "../../../components/Table";

const Sells: React.FC = () => {
    const lines = [
        {
            purchaseNumber: "0001",
            price: "500,00",
            date: "01/01/2021",
            seeMore: "more",
        },
        {
            purchaseNumber: "0002",
            price: "500,00",
            date: "01/02/2021",
            seeMore: "more",
        },
        {
            purchaseNumber: "0003",
            price: "500,00",
            date: "01/03/2021",
            seeMore: "more",
        }
    ]
    return (
        <Container>
            <Aside>
                <SideBar/>
            </Aside>
            <Content>
                <Table lines={lines}/>
            </Content>
        </Container>)
};

export default Sells;
