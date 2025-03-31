import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with us today.</p>
      </div>
      
      <Row className="mb-5">
        <Col md={6}>
          <h3>Send Us a Message</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message..." />
            </Form.Group>
            
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        
        <Col md={6}>
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> contact@gotrendify.com</p>
          <p><strong>Phone:</strong> +91 9341436937</p>
          <p><strong>Address:</strong> Jaipur, Rajasthan 302017, India</p>
          
          <h3>Follow Us</h3>
          <p>
            <a href="https://facebook.com">Facebook</a> | 
            <a href="https://instagram.com">Instagram</a> | 
            <a href="https://linkedin.com">LinkedIn</a> | 
            <a href="https://twitter.com">Twitter</a>
          </p>
          
          <h3>Location</h3>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1572841816125!2d75.78727007531962!3d26.91243357670809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dcfbc85b5b%3A0xa511a32d5a0d9f92!2sJaipur%2C%20Rajasthan%20302017%2C%20India!5e0!3m2!1sen!2sin!4v1711893763440"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
