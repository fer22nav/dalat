import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  return (
    <><section className="bg-light-purple py-5">
      <Container>
        <Row className="align-items-center">
          {/* Texto */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-dark-blue">Desarrollo Accesible Latinoamericano</h1>
            <p className="lead text-dark-blue">
              Fundación dalat, brindamos capacitaciones de accesibilidad digital en español y gratis en convenio
              con distintos entes públicos y privados.
            </p>

            {/* Botón solo visible en escritorio */}
            <div className="d-none d-lg-block">
              <Button variant="secondary" className="px-4 py-2">
                Conoce más de nosotros
              </Button>
            </div>
          </Col>

          {/* Imagen */}
          <Col lg={6} md={12} className="text-center">
            <Image
              src="/images/home-fist-foto.png"
              alt="Accesibilidad Digital"
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }} />
          </Col>

          {/* Botón solo visible en móvil */}
          <Col md={12} className="text-center mt-3 d-lg-none">
            <Button variant="secondary" className="px-4 py-2">
              Conoce más de nosotros
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
      <section className="bg-light-beige py-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                Nuestro <br />impacto
              </h2>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+10 mil</h3>
                  <p>Certificaciones entregadas <br /> GRATIS</p>
                </Col>
                <Col md={4}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+15 mil</h3>
                  <p>Personas se capacitaron en <br /> nuestras formaciones</p>
                </Col>
                <Col md={4}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+4 años</h3>
                  <p>Creando comunidad</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section></>
  );
}
