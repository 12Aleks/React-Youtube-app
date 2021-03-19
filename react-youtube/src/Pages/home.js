import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function HomeComponent() {
  return (
    <section>
      <Container>
        <Row>
          <Col md="12">
            <h1>Home</h1>
            <hr />
          </Col>
          <Col md="12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"./images/01.jpeg"}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={"./images/02.jpeg"}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/03.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
