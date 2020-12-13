import React, {useCallback, useRef} from 'react'

import {AnimationContainer, Background, Container, Content} from "./styles";
import logo from "../../assets/Logo-Lua.png"
import {Form} from "@unform/web";
import {FormHandles} from "@unform/core";

interface LoginFormData {
    email: string
    password: string
}

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: LoginFormData) => {

    }, []);

    return (
        <Container>
            <Background/>
            <Content>
                <AnimationContainer>
                    <img src={logo} alt="logo"/>
                    <Form ref={formRef} onSubmit={handleSubmit}>

                    </Form>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default Login;