import React from "react";
import { MdSearch } from "react-icons/md"
import githubLogo from "../../assets/images/github.svg";


import { Container, Logo, Title, Form, Input, Button } from "./styles";

function MainPage() {
  return(

    <Container>
      <Logo src={githubLogo} alt="API Github"/>
      <Title> API Github</Title>
      <Form>
        <Input placeholder="usuário" />
        <Button>
          <MdSearch size={42}/>
        </Button>
      </Form>

    </Container>
  );
}

export default MainPage;