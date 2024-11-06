import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import VideoEmbed from "@/components/VideoEmbed";

export default function Home() {
  return (
    <>
      <section className="bg-light-purple py-5">
        <Container>
          <Row className="align-items-center">
            {/* Texto */}
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-dark-blue">Desarrollo Accesible Latinoamericano</h1>
              <p className="lead text-dark-blue mt-4" style={{ lineHeight: '1.8' }}>
                Fundación dalat, brindamos capacitaciones de<br /> accesibilidad digital en español y gratis en convenio<br />
                con distintos entes públicos y privados.
              </p>

              {/* Botón solo visible en escritorio */}
              <div className="d-none d-lg-block mt-5">
                <Button variant="secondary" className="px-5 py-3">
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
        <Container className=" py-5">
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
                  <p>Certificaciones entregadas <br />GRATIS</p>
                </Col>
                <Col md={4}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+15 mil</h3>
                  <p>Personas se capacitaron en <br />nuestras formaciones</p>
                </Col>
                <Col md={4}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>+4 años</h3>
                  <p>Creando comunidad</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-yellow py-5">
        <Container>
          <Row>
            {/* Columna con texto y fondo */}
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center large-background-red"
            >
              <h2 className="youtube-title">
                Noviembre 2024 <br />
                vuelve el congreso <br />
                latinoamericano de <br />
                accesibilidad y <br />
                usabilidad <strong>CLAU</strong>
              </h2>
            </Col>

            {/* Columna con video y fondo */}
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center large-background-egg"
            >
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/5yX4gH7uHE0?si=0kSIztCHigK6dtdS"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </Col>
          </Row>

          {/* Fila para los botones */}
          <Row className="justify-content-center justify-content-lg-start">
            <Col xs={12} lg="auto" className="text-center text-lg-start d-flex flex-column flex-lg-row">
              <Button variant="primary" size="lg" className="mb-2 mb-lg-0 flex-grow-1 flex-lg-grow-0 mx-4 mx-lg-0 me-lg-3">
                Regístrate a las charlas
              </Button>
              <Button variant="outline" size="lg" className="flex-grow-1 flex-lg-grow-0 mx-4 mx-lg-0">
                YouTube del CLAU
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-blue py-5">
        <Container className=" py-5">
          <Row className="text-center">
            <Col >
              <Image
                src="/images/dalat-logo-yellow-line.png"
                alt="Accesibilidad Digital"
                width={240}
                height={96}
                className="mb-4"
              />
              <h2 className="display-6 text-white">
                <span className="d-block d-sm-inline">Lee nuestra</span>
                <span className="d-block d-sm-inline">declaración de </span>
                <span className="d-block d-sm-inline">accesibilidad</span>
              </h2>

              <Button variant="secondary" className="px-5 py-3 fw-semibold mt-5">
                Declaración de accesibilidad
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-purple">
        <Container>
          <Row>
            <Col lg={7} className="pb-5">
              <Image
                src="/images/home-second-photo.svg"
                alt="Accesibilidad Digital"
                width={700}
                height={556}
                className="img-fluid"
              />
            </Col>
            <Col lg={5} className="d-flex flex-column justify-content-center">
              <h2 className="text-blue" style={{ fontSize: '50px', fontWeight: '600' }}>
                Última<br /> capacitación
              </h2>
              <p className="lead text-dark-blue mt-3" style={{ lineHeight: '1.8' }}>
                Enterate de todas nuestras capacitaciones en las<br /> redes sociales, o suscribite a nuestro canal de<br /> YouTube
              </p>
              <div className="d-flex justify-content-lg-start justify-content-center mt-5">
                <Button variant="secondary" className="px-5 py-3 fw-semibold">
                  Youtube de Fundación Dalat
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}
