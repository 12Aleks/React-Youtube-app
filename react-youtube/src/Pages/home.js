import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function HomeComponent() {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col md="12">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="./images/02.jpeg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="./images/01.jpeg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/03.jpeg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md="12">
            <h1>Home</h1>
            <hr />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
