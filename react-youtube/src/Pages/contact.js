import React from "react";
import { Container, Row , Col} from "react-bootstrap";

export default function ContactPage() {
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1 className="mt-3">Contact</h1>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}
