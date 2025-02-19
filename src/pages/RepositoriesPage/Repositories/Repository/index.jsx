import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from './styles';

export default function Repository(){
    return(
        <Container color="#f37272">
            <Name>Repository Name</Name>
            <Description>Repository Description</Description>
            <Footer color="#f37272">
                <Lang>Repository Lang</Lang>
                <Link href="https://github.com/Sussego/Github-API" target="_blank">
                    Ver
                </Link>
            </Footer>
        </Container>
    );
}