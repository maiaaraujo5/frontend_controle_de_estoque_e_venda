import React from "react";
import {Container} from "./styles";
import ReactApexChart from "react-apexcharts";

interface Props {
    title: string
    type: "line" | "area" | "bar"
    categories: string[]
    width: number
    height: number
    data: data[]
}

interface data {
    name: string
    data: number[]
}

const Chart: React.FC<Props> = ({title, type, categories, width, height, data}) => {
    const options = {

        chart: {
            type: type,
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
            text: title,
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: categories,
        },
    };
    return (
        <Container>
            <ReactApexChart options={options} series={data} width="100%" height="100%" type={type}/>
        </Container>);
};

export default Chart