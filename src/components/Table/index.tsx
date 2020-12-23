import React from "react";
import {Container} from "./styles";

const Table: React.FC = () => {
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
                    <tr>
                        <td>000001</td>
                        <td>R$ 50,00</td>
                        <td>21/12/2020</td>
                        <td>Ver mais</td>
                    </tr>
                    <tr>
                        <td>000002</td>
                        <td>R$ 50,00</td>
                        <td>21/12/2020</td>
                        <td>Ver mais</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
};

export default Table