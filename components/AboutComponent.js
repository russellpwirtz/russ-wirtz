import { Container, Row, Col, Form, Button, Tabs, Tab } from "react-bootstrap";
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
  const { color, reason: colorReason, error: colorError } = useColorApi(userQuestion, chatbotReponse);
  const [activeTab, setActiveTab] = useState("form");

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
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mt-4">
              <Tab eventKey="form" title="Form">
                <Container className="mt-4">
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
              </Tab>
              <Tab eventKey="color" title="Color">
                <Container className="mt-4">
                  {colorReason ? <p>Color reasoning: {colorReason}</p> : null}
                  {colorError ? <p>Error fetching background color: {colorError}</p> : null}
                </Container>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
