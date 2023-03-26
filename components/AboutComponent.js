import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/AboutComponent.module.css";
import React, { useRef, useState } from 'react';
import { useChatgpt } from '../lib/hooks/useChatgpt';
import useColorApi from '../lib/hooks/useColorApi';

const AboutComponent = () => {
  const inputRef = useRef(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { data: chatbotReponse, error: errorMessage } = useChatgpt(userQuestion);
  const { data: color, error: colorError } = useColorApi(userQuestion, chatbotReponse);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserQuestion(inputRef.current.value);
    setSubmitted(true);
  };

  return (
    <div className={styles.animatedBackground}>
      <div className={styles.container}>
        <div className={styles.whiteBox}>
          <Container>
            <Row className={styles.row}>
              <Col md={6}>
                <Image
                  src="/russ.jpg"
                  alt="Russ's profile picture"
                  width={500}
                  height={350}
                  className={styles.profileImage}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Container className="mt-5">
                  <Form onSubmit={handleSubmit} className="question-form">
                    <Form.Group controlId="userQuestion">
                      <Form.Control ref={inputRef} type="text" placeholder="Type your question here" className="question-input form-control float" />
                      <Form.Label className="float-label">Type your question here</Form.Label>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-button">
                      Submit Question
                    </Button>
                  </Form>
                  <div className="message-container mt-4">
                    {colorError ? <p>Error fetching background color: {colorError}</p> : null}
                    {errorMessage ? (
                      <p>Error: {errorMessage}</p>
                    ) : chatbotReponse ? (
                      <p>{chatbotReponse}</p>
                    ) : submitted ? (
                      <p>Loading...</p>
                    ) : (
                      <p>Please enter your question</p>
                    )}
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
