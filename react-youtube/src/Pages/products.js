import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/loading";
import Pagination from "./components/pagination";
import Selected from "./components/select";
import CardComponent from "./components/card";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductsComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(21);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const rez = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=80"
      );
      setData(rez.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  //Get current products

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1 className="mt-3">Products</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Selected data={data} />
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Loading />
        ) : (
          currentProducts.map((d, index) => {
            return <CardComponent d={d} key={index} />;
          })
        )}
        <Col
          xl={12}
          className="d-flex align-content-center justify-content-center"
        >
          {!loading && (
            <Pagination
              productPerPage={productPerPage}
              totalProducts={data.length}
              paginate={paginate}
            />
          )}
        </Col>
      </Row>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Container>
  );
}
