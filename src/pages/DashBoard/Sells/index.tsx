import React from "react";
import {Container, Content} from "./styles";
import SideBar from "../../../components/SideBar";
import {Aside} from "../global";
import Table from "../../../components/Table";

const Sells: React.FC = () => {
    return (
        <Container>
            <Aside>
                <SideBar/>
            </Aside>
            <Content>
                <Table/>
            </Content>
        </Container>)
};

export default Sells;