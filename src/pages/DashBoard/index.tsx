import React from 'react'
import SideBar from "../../components/SideBar";
import {Container, Content, Aside, Cards} from "./styles";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";


const Dashboard: React.FC = () => {
    return (
        <Container>
            <Aside>
                <SideBar/>
            </Aside>
            <Content>
                <Cards>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Cards>
            </Content>
            </Container>

    )
};

export default Dashboard;