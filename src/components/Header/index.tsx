import React from 'react'
import {Container} from "./styles";

import Logo from '../../assets/Logo-Lua.svg'

const Header: React.FC = () => (
    <Container>
        <header>
            <img src={Logo} alt="A Lua é de Prata"/>
        </header>
    </Container>
);

export default Header;