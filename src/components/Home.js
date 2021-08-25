import React from 'react';
import { Container, Jumbotron, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <h1 className="display-3 text-center">Home</h1>
          <p className="lead text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            omnis aliquid, expedita iste eum magni cum deleniti numquam enim
            possimus! Dolorem ab reiciendis ipsa molestiae aut nobis,
            accusantium sunt saepe perspiciatis praesentium repudiandae, earum
            id provident? Facere est quia enim in impedit rem eos totam nobis,
            labore fuga soluta ex.
          </p>
          <Button variant="outline-danger" as={Link} to="/posts">
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
