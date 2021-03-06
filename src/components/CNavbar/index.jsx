import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Link } from 'wouter';

import Routes from '../Routes';

function CNavbar(props) {
  const { bg, name } = props;
  return (
    <>
      <Navbar bg={bg} style={{ justifyContent: 'space-between' }} expand="md">
        <Navbar.Brand as={Link} href="/">
          {name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Nav>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/ofertas">
                Ofertas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/macetas">
                Macetas
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/accesorios">
                Accesorios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Nav.Link className="nav-link" as={Link} href="/herramientas">Herramientas</Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Button variant="outline-primary" as={Link} href="/entrar">
                Entrar
              </Button>

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <Routes />
    </>
  );
}
CNavbar.defaultProps = {
  bg: 'light',
  name: 'Tienda',
};
CNavbar.propTypes = {
  bg: PropTypes.string,
  name: PropTypes.string,
};
export default CNavbar;
