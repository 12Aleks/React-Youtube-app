import React from "react";
import HomeComponent from "../Pages/home";
import NotFoundComponent from "../Pages/notFound";
import ProductsComponent from "../Pages/products";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function Mains() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          <Col
            className="bg-secondary d-flex flex-column"
            xs={2}
            id="sidebar-wrapper"
          >
            <Nav className="flex-column">
              <NavLink
                exact
                className="nav-link dark-gray"
                to="/"
                activeStyle={{ color: "#fff" }}
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link dark-gray"
                to="/products"
                activeStyle={{ color: "#fff" }}
              >
                Products
              </NavLink>
            </Nav>
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Switch>
              <Route path={"/"} exact component={HomeComponent} />
              <Route path={"/products"} component={ProductsComponent} />
              <Route path={"*"} component={NotFoundComponent} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
