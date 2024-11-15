import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function CoursesPage() {
  return (
    <>
      <section className="bg-light-purple py-4">
        <Container>
          <Row className="align-items-end">
            {/* Texto */}
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-dark-blue">Cursos Gratis</h1>
              <p className="lead text-dark-blue mt-4" style={{ lineHeight: '1.8' }}>
                En fundación Dalat brindamos capacitaciones de accesibilidad<br />
                digital en español y gratis en convenio con distintos entes<br />  públicos y privados.
              </p>

              {/* Botón solo visible en escritorio */}
              <div className=" mt-4">
                <Button variant="secondary" className="px-5 py-2">
                  Contactanos
                </Button>
              </div>
            </Col>

            <Col lg={6} md={12} className="text-lg-end">
              <Image
                src="/images/courses-first-photo.svg"
                alt="Accesibilidad Digital"
                width={426}
                height={384}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light-beige py-4 pb-5">
        <Container>
          <Row className="align-items-center">
            {/* Texto */}
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold text-dark-blue">Cursos gratis en YouTube</h2>



            </Col> {/* Imagen */}
            <Col lg={6} md={12} className="text-lg-end">
              <Image
                src="/images/courses-second-photo.svg"
                alt="imagen decorativa"
                width={256}
                height={148}
                className="img-fluid"
              />
            </Col>

          </Row>
          <Row className="mt-4">
            <Col md={4}>
              <h3 className="h5 fw-bold text-dark-blue" style={{ textDecoration: 'underline' }}>
                Navegación Accesible
              </h3>
              <p className="lead text-dark-blue mt-4" style={{ lineHeight: '1.5', fontSize: '16px' }}>
                Curso de formación en accesibilidad digital para educación, diseño, testing,
                desarrollo y managers en colaboración con el gobierno de Córdoba.
              </p>
            </Col>


            <Col md={4}>
              <h3 className="h5 fw-bold text-dark-blue" style={{ textDecoration: 'underline' }}>
                Testing de Accesibilidad
              </h3>
              <p className="lead text-dark-blue mt-4" style={{ lineHeight: '1.5', fontSize: '16px' }}>
                Curso de formación en testing de accesibilidad digital gratis en video en
                colaboración con la Secretaría de extensión universitaria y UTN de Córdoba.
              </p>

            </Col>

            <Col md={4}>

            </Col>
          </Row>

        </Container>
      </section>
      <section className="bg-gradient-blue-purple">
        <Container className="bg-gradient-images">
        </Container>
      </section>
    </>
  );
}