import React from 'react'
import SideBar from "../../components/SideBar";
import {Container, Content, Aside, Cards, Charts, LineChart} from "./styles";
import Card from "../../components/Card";
import {FcBusinesswoman, FcMoneyTransfer, FcPositiveDynamic, FcShipped} from "react-icons/all";
import Chart from 'react-apexcharts'


const Dashboard: React.FC = () => {

    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Produtos mais vendidos nos últimos 6 meses',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];


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
                <Charts>
                    <LineChart>
                        <Chart options={options} series={series} type="line" width="700"/>
                    </LineChart>
                    <LineChart>
                        <Chart options={options} series={series} type="bar" width="700"/>
                    </LineChart>
                    <LineChart>
                        <Chart options={options} series={series} type="area" width="700"/>
                    </LineChart>
                </Charts>
            </Content>
        </Container>

    )
};

export default Dashboard;