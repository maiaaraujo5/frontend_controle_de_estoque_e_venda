import React, {useState} from 'react'

import {Container} from './styles'

const Product: React.FC = () => {
    return (
        <Container>
            <header>
                <img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5032921_png/attract-round-ring--white--rhodium-plated-swarovski-5032921.png" alt='product name'/>
            </header>
            <section className="body">
                <h2>Anel</h2>
                <p>Anel muito bonito</p>
                <p className="price"> R$ <b>200,00</b></p>
            </section>
            <section className="footer">

                <div className="availability-container">

                    <label htmlFor={`available-switch-123}`} className="switch">
                        <input
                            id={`available-switch-123}`}
                            type="checkbox"
                            checked={true}
                            data-testid={`change-status-food-123`}
                        />
                        <span className="slider" />
                    </label>
                </div>
            </section>

        </Container>
    );
};

export default Product