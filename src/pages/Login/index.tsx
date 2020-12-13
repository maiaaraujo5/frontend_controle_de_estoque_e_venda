import React, {useCallback, useRef} from 'react'

import {AnimationContainer, Background, Container, Content} from "./styles";
import logo from "../../assets/Logo-Lua.png"
import {Form} from "@unform/web";
import {FormHandles} from "@unform/core";
import Input from "../../components/Input";
import {FiLock, FiMail} from "react-icons/all";
import Button from "../../components/Button";

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
            <Background className="split left"/>
            <Content className="split right">
                <AnimationContainer>
                    <img src={logo} alt="logo"/>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input name="email" icon={FiMail} placeholder="E-mail"/>
                        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                        <Button type="submit">Entrar</Button>
                    </Form>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default Login;