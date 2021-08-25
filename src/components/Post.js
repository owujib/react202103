import React from 'react';
import { Spinner, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Post(props) {
  return (
    <Container>
      <h1 className="text-center display-4">Post</h1>

      {props.isLoading ? (
        <div className="text-center">
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          <Row>
            {props.posts.slice(0, 30).map((post) => {
              return (
                <Col md={3}>
                  <h4>
                    <Link to={`/posts/${post.id}`}>
                      {post.title.slice(0, 10)}
                    </Link>
                    ...
                  </h4>
                  <p>{post.body.slice(0, 100)}...</p>
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
}
