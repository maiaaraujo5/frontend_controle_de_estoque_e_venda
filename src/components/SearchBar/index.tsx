import React from "react";
import {Container, Search} from "./styles";

interface Props {
    setKeyword: any
}

const SearchBar: React.FC<Props> = ({setKeyword}) => {
        return (
            <Container>
                <Search>
                    <input
                        onChange={(event => setKeyword(event.target.value))}
                        placeholder="Procure por produtos aqui"/>
                </Search>
            </Container>
        );
    }
;

export default SearchBar