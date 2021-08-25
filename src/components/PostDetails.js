import React, { useState, useEffect } from 'react';
import { Spinner, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

export default function PostDetails(props) {
  const [post, setPost] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      )
      .then((response) => {
        setPost(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setTimeout(() => {
          setErr(true);
          setShow(true);
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  console.log(post);
  return (
    <Container>
      {err && show ? (
        // <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert variant="danger" onClose={() => setShow(false)}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Check your network settings and reload to try again later 🤪</p>
        </Alert>
      ) : (
        ''
      )}
      {isLoading ? (
        <div className="text-center my-4">
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          <h1 className="text-center display-4">{post?.title}</h1>
          <p>{post?.body}</p>
        </>
      )}
    </Container>
  );
}
