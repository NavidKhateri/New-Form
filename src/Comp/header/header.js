import React from "react";
import { Container, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Header.css";

const Header = () => {



  return (
    <React.Fragment>
      <header>
        <Navbar collapseOnSelect expand="lg" variant="dark"  className="navasl">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Navid </Navbar.Brand>
            </LinkContainer>
            
          </Container>
        </Navbar>
      </header>
    </React.Fragment>
  );
};

export default React.memo(Header);
