import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">BeritaKu</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Beranda</Nav.Link>
              <Nav.Link as={Link} to="/kategori/politik" active={location.pathname.includes('/kategori/politik')}>Politik</Nav.Link>
              <Nav.Link as={Link} to="/kategori/teknologi" active={location.pathname.includes('/kategori/teknologi')}>Teknologi</Nav.Link>
              <Nav.Link as={Link} to="/kategori/ekonomi" active={location.pathname.includes('/kategori/ekonomi')}>Ekonomi</Nav.Link>
              <Nav.Link as={Link} to="/kategori/olahraga" active={location.pathname.includes('/kategori/olahraga')}>Olahraga</Nav.Link>
              <Nav.Link as={Link} to="/kategori/lingkungan" active={location.pathname.includes('/kategori/lingkungan')}>Lingkungan</Nav.Link>
              <Nav.Link as={Link} to="/kategori/bisnis" active={location.pathname.includes('/kategori/bisnis')}>Bisnis</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

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