import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">BeritaKu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/kategori/terbaru">Terbaru</Nav.Link>
              <Nav.Link href="/kategori/populer">Populer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {children}
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          <p>&copy; 2026 BeritaKu. Hak Cipta Dilindungi.</p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;