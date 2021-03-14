import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/loading";
import Pagination from "./components/pagination";
import CardComponent from "./components/card";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductsComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(9);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const rez = await axios.get("https://fakestoreapi.com/products");
      setData(rez.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  //Get current products

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts  = data.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1>Products</h1>
          <hr />
        </Col>
      </Row>
      <Row >
      {loading?
          <Loading />: currentProducts.map((d, index) => {
          return <CardComponent d={d} key={index} />;
        })
      }
        <Pagination productPerPage={productPerPage} totalProducts={data.length} paginate={paginate}/>
      </Row>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </Container>
  )
}
