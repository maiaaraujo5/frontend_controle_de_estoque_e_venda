import React from "react";
import {Container} from "./styles";
import lua from '../../assets/Logo-Lua.png'

const NavBar: React.FC = () => {
    return (
        <Container>
            <header>
               <img src={lua}
                    alt="A Lua é de Prata"/>
            </header>
        </Container>
    );
};

export default NavBar;

