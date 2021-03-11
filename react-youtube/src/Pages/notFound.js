import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { useLocation } from "react-router-dom";

export default function NotFoundComponent() {
  // const locations = useLocation();
  return (
    <Container>
      <Row>
        <Col>
          <h1>Error 404, element</h1>
        </Col>
      </Row>
    </Container>
  );
}
