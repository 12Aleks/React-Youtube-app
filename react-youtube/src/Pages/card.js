import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const cardStyle = {
  img: {
    maxHeight: "300px",
    width: "auto",
  },
};

export default function CardComponent({ d }) {
  return (
    <Col md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={d.image}
          fluid
          className="p-3 m-auto d-block"
        />
        <Card.Body>
          <Card.Title>{d.title}</Card.Title>
          <Card.Text>{d.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
