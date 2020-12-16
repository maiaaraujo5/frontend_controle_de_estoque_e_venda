import React from 'react'
import {Content} from "./styles";
import {Link} from "react-router-dom";
import {AiOutlineDashboard, AiOutlineShop, BiMoney} from "react-icons/all";

const SideBar: React.FC = () => {
    return (
        <Content>
            <header>
                <img
                    src="https://avatars3.githubusercontent.com/u/14034388?s=460&u=e7cdf3d30e2e12be9bfa72b9e7e440b8ec5c0382&v=4"
                    alt="picture-profile"
                />
                <h2>Lucas M.</h2>
            </header>
            <menu>
                <section className="options">
                    <Link to="/dashboard"><AiOutlineDashboard/> Dashboard</Link>
                    <Link to="/my-sells"><BiMoney/> Vendas</Link>
                    <Link to="/products"><AiOutlineShop/>  Produtos</Link>
                </section>
            </menu>
        </Content>
    )
};

export default SideBar;