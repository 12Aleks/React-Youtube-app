import React, { useEffect, useState } from "react";
import CardComponent from "./card";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductsComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  });

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1>Products</h1>
        </Col>
      </Row>
      <Row>
        {data.map((d, index) => {
          return <CardComponent d={d} key={index} />;
        })}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Row>
    </Container>
  );
}
