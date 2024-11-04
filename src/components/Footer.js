import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-custom-blue py-5">
      <Container>
        <Row>
          {/* Redes sociales */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Redes sociales</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-white" aria-label="Instagram">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li className="mb-3" >
                <a href="#" className="text-white" aria-label="YouTube">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </Col>

          {/* Sobre la organización */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Sobre la organización</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-white">Sobre nosotros</a></li>
              <li className="mb-3"><a href="#" className="text-white">Contacto</a></li>
              <li className="mb-3"><a href="#" className="text-white">Cómo colaborar</a></li>
              <li className="mb-3"><a href="#" className="text-white">Código de convivencia</a></li>
              <li className="mb-3"><a href="#" className="text-white">Mapa del sitio</a></li>
            </ul>
          </Col>

          {/* Proyectos */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Proyectos</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-white">Accesibilidad 101</a></li>
              <li className="mb-3"><a href="#" className="text-white">CLAU 2022</a></li>
              <li className="mb-3"><a href="#" className="text-white">CLAU 2024</a></li>
              <li className="mb-3"><a href="#" className="text-white">Instituto de Accesibilidad</a></li>
              <li className="mb-3"><a href="#" className="text-white">Traducción del WAS</a></li>
              <li className="mb-3"><a href="#" className="text-white">Repositorio de charlas en Drive</a></li>
              <li className="mb-3"><a href="#" className="text-white">Repositorio de Código</a></li>
            </ul>
          </Col>

          {/* Cursos gratis */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Cursos gratis</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-white">Navegación accesible</a></li>
              <li className="mb-3"><a href="#" className="text-white">Testing de Accesibilidad</a></li>
            </ul>
          </Col>
        </Row>

        {/* <hr className="bg-white my-4" /> */}

        {/* Footer Bottom */}
        <Row className="text-center">
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} dalat. Fundación desarrollo accesible latinoamericano</p>
          </Col>
          <Col md={6}>
            <a href="#" className="text-white">Declaración de accesibilidad</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
