import React, {useState} from 'react'

import {Container} from './styles'
import iconCart from '../../assets/icon-cart.svg'

const Product: React.FC = () => {
    return (
        <Container>
            <header>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/ZCbY4s4BpUcMPjdybQXVrsg5G1g2%2FF7D41465-2EDE-4BD3-88F3-6777BA77EF5A.jpg?alt=media"
                    alt='product name'/>
                <img className="icon-cart"
                     src={iconCart}
                     alt="icon-cart"
                />
            </header>
            <section className="body">
                <h1>Anel</h1>
                <p className="category"> Anel </p>
                <p className="price"> R$ 200,00</p>
                <p>Anel muito bonito</p>
            </section>
        </Container>
    );
};

export default Product