import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 0;
    margin-left: 50px;
    
    display: grid;
    
    grid-template-columns: repeat(7, 1fr);
    grip-gap: 32px;
    
    &{
        margin-left: 50px;
    }
`;

