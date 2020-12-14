import React from 'react'
import SideBar from "../../components/SideBar";
import {Container, Content, Header} from "./styles";
import NavBar from "../../components/NavBar";


const Dashboard: React.FC = () => {
    return (
        <Container>
            <Header>
                <NavBar/>
                <SideBar/>
            </Header>
            <Content>
                <h1>Olá</h1>
            </Content>

        </Container>

    )
};

export default Dashboard;