'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css';

const Header = () => {
  const currentPath = usePathname();

  return (
    <header>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image
              src="/images/logo-dalat.svg"
              alt="Descripción de la imagen"
              width={144}
              height={56}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="p-3 text-end">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                href="/"
                className={currentPath === '/' ? 'active' : ''}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/projects"
                className={currentPath === '/projects' ? 'active' : ''}
              >
                Proyectos
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/courses"
                className={currentPath === '/courses' ? 'active' : ''}
              >
                Cursos Gratis
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/about-us"
                className={currentPath === '/about-us' ? 'active' : ''}
              >
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/contact"
                className={currentPath === '/contact' ? 'active' : ''}
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
