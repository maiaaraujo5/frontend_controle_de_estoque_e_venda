import React from 'react'
import SideBar from "../../components/SideBar";
import {Container, Content, Aside, Cards} from "./styles";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import {FcBusinesswoman, FcMoneyTransfer, FcPositiveDynamic, FcShipped} from "react-icons/all";


const Dashboard: React.FC = () => {
    return (
        <Container>
            <Aside>
                <SideBar/>
            </Aside>
            <Content>
                <Cards>
                    <Card icon={FcShipped} title="Este mês você vendeu" value="30 Produtos"/>
                    <Card icon={FcMoneyTransfer} title="Totalizando" value="R$ 500,00"/>
                    <Card icon={FcBusinesswoman} title="Deixando mais linda" value="5 Clientes"/>
                    <Card icon={FcPositiveDynamic} title="Sua comissão é de" value="R$ 150,00"/>
                </Cards>
            </Content>
            </Container>

    )
};

export default Dashboard;