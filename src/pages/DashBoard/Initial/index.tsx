import React from 'react'
import SideBar from "../../../components/SideBar";
import {Container, Content, Cards, Charts} from "./styles";
import Card from "../../../components/Card";
import {FcBusinesswoman, FcMoneyTransfer, FcPositiveDynamic, FcShipped} from "react-icons/all";
import Chart from "../../../components/AreaChart";
import {Aside} from "../global";


const Dashboard: React.FC = () => {
    const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    const series = [{
        name: "Colar",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
        {
            name: "Brinco",
            data: [21, 52, 46, 62, 60, 73, 80, 102, 149]
        }];


    return (
        <Container>
            <Aside>
                <SideBar/>
            </Aside>
            <Content>
                <Cards>
                    <Card icon={FcShipped} title="Você vendeu" value="30 Produtos"/>
                    <Card icon={FcMoneyTransfer} title="Totalizando" value="R$ 500,00"/>
                    <Card icon={FcBusinesswoman} title="Deixou mais linda" value="5 Clientes"/>
                    <Card icon={FcPositiveDynamic} title="Sua comissão é de" value="R$ 150,00"/>
                </Cards>
                <Charts>
                    <Chart title="Categorias mais vendidas nos últimos meses" width={700} height={420} type="line"
                               categories={categories} data={series}/>
                    <Chart title="Evolução de suas vendas" width={700} height={420} type="bar"
                               categories={categories} data={series}/>
                    <div id="chart"/>
                </Charts>
            </Content>
        </Container>

    )
};

export default Dashboard;