import React from "react";
import {Container} from "./styles";
import {Link} from "react-router-dom";

interface IProps {
    lines: Line[]
}

interface Line {
    purchaseNumber: string,
    price: string,
    date: string,
    seeMore: string,
}


const Table: React.FC<IProps> = ({lines}: IProps) => {
    return (
        <Container>
            <table className="fl-table">
                <thead>
                <tr>
                    <th>Número da Compra</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Ver Mais</th>
                </tr>
                </thead>
                <tbody>
                {
                    lines.map((line: Line) => (
                        <tr key={line.purchaseNumber}>
                            <td>{line.purchaseNumber}</td>
                            <td>R$ {line.price}</td>
                            <td>{line.date}</td>
                            <td><Link to={line.seeMore}>Ver mais</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </Container>
    );
};

export default Table
