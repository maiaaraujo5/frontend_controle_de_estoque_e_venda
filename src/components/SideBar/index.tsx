import React from 'react'
import {Content, Logo, Header, PictureProfile, Menu, Option} from "./styles";
import {Link} from "react-router-dom";
import {AiOutlineDashboard, AiOutlineShop, BiMoney, CgProfile} from "react-icons/all";
import lua from "../../assets/Logo-Lua.png";

const SideBar: React.FC = () => {
    return (
        <Content>
            <Header>
                <Logo>
                    <img src={lua}
                         alt="A Lua é de Prata"/>
                </Logo>
                <PictureProfile>
                    <img
                        src="https://avatars3.githubusercontent.com/u/14034388?s=460&u=e7cdf3d30e2e12be9bfa72b9e7e440b8ec5c0382&v=4"
                        alt="picture-profile"
                    />
                </PictureProfile>
                <h2>Lucas M.</h2>
            </Header>
            <Menu>
                <Option>
                    <AiOutlineDashboard/>
                    <Link to="/dashboard">Dashboard</Link>
                </Option>
                {/*<Option>*/}
                {/*    <CgProfile/>*/}
                {/*    <Link to="/sells">Meu Perfil</Link>*/}
                {/*</Option>*/}
                <Option>
                    <AiOutlineShop/>
                    <Link to="/products">Produtos</Link>
                </Option>
                <Option>
                    <BiMoney/>
                    <Link to="/sells">Minhas Vendas</Link>
                </Option>
            </Menu>
        </Content>
    )
};

export default SideBar;