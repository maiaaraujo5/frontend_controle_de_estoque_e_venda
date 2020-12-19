import React from 'react'
import SideBar from "../../components/SideBar";
import {Container, Content, Aside} from "./styles";
import NavBar from "../../components/NavBar";


const Dashboard: React.FC = () => {
    return (
        <Container>
            <Aside>
                <SideBar/>
            </Aside>

            <Content>
                <h1>Dashboard</h1>
            </Content>
        </Container>

    )
};

export default Dashboard;