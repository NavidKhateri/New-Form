import React from "react";
import { Container, Navbar} from "react-bootstrap";

import "./Header.css";

const Header = () => {



  return (
    <React.Fragment>
      <header>
        <Navbar collapseOnSelect expand="lg" variant="dark"  className="navasl">
          <Container>
              <Navbar.Brand>Navid </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </React.Fragment>
  );
};

export default React.memo(Header);
