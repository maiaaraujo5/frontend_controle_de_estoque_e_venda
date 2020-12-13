import React from 'react'
import {Container} from "./styles";

import Logo from '../../assets/Logo-Lua.png'
import {Link} from "react-router-dom";

interface Props {
    menuOptions: MenuOption[]
}

interface MenuOption {
    name: string
    url: string
}


const Header: React.FC<Props> = ({menuOptions}: Props) => (
    <Container>
        <header>
            <img src={Logo} alt="Lua de Prata"/>
        </header>
        <menu>
            {menuOptions.map((option: MenuOption) => (
                <Link key={option.name} to={option.url}>{option.name}</Link>
            ))}
        </menu>
    </Container>
);

export default Header;