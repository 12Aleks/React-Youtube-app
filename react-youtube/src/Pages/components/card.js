import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const cardStyle = {
  wrapper: {
    height: "300px",
    width: "100%",
  },
  img: {
    maxHeight: "300px",
    height: "auto",
    width: "auto",
    maxWidth: "100%",
  },
};

export default function CardComponent({ d }) {
  return (
    <Col sm="6" md="4" xl="3">
      <Card className="d-flex flex-column justify-content-between">
        <div
          style={cardStyle.wrapper}
          className="d-flex flex-column justify-content-between"
        >
          <Card.Img
            variant="top"
            src={d.image}
            fluid
            className="p-3 m-auto d-block"
            style={cardStyle.img}
          />
        </div>
        <Card.Body>
          <Card.Title>{d.title}</Card.Title>
          <Card.Text maxLength="10">{d.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
