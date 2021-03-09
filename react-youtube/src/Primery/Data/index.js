import React, { useEffect, useState } from "react";
import Context from "./context";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import ElementComponent from "./element";

function IndexComponent() {
  const [list, setList] = useState(["posts", "photos", "users"]);
  const [startData, setStartData] = useState("posts");
  const [data, setData] = useState([]);

  function Change(e) {
    console.log(e);
    setStartData(e);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${startData}?_limit=5`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [startData]);

  const deleteElement = (id) => {
    setData(data.filter((el) => el.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col lg="12" className="m-3">
          <h3 className="mt-3 mb-3">You selected: {startData}</h3>

          <select onChange={(e) => Change(e.target.value)}>
            {list.map((d, index) => {
              return (
                <option key={index} value={d}>
                  {d}
                </option>
              );
            })}
          </select>
        </Col>
        <Col lg="12">
          <ListGroup>
            {data.map((el, key) => {
              return (
                <Context.Provider value={{ el, startData }}>
                  <ElementComponent key={key} deleteElement={deleteElement} />
                </Context.Provider>
              );
            })}
          </ListGroup>

          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Col>
      </Row>
    </Container>
  );
}

export default IndexComponent;
