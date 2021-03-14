import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/loading";
import CardComponent from "./components/card";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductsComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const rez = await axios.get("https://fakestoreapi.com/products");
      setData(rez.data);
      setLoading(false);
    };
    fetchProducts();
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
  }, []);

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1>Products</h1>
          <hr />
        </Col>
      </Row>
      <Loading/> 
      <Row>
        {data.map((d, index) => {
          return <CardComponent d={d} key={index} />;
        })}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Row>
    </Container>
  )
}
