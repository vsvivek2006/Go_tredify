import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    { text: "GO Trendify helped us achieve higher rankings in Google search results. Highly recommend!", name: "Rahul Sharma" },
    { text: "Their social media strategies boosted our engagement by 50%! Amazing team.", name: "Anjali Verma" },
    { text: "Great content marketing services! Helped us reach a wider audience.", name: "Vikram Singh" },
    { text: "PPC campaigns from GO Trendify gave us a massive ROI boost!", name: "Meera Patel" },
    { text: "The best SEO services we've ever used!", name: "Amit Joshi" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1>Welcome to GO Trendify</h1>
        <p>Your One-Stop Digital Marketing Solution</p>
        <Button variant="primary" onClick={() => navigate("/about")}>Learn More</Button>
      </div>
      
      {/* Services Overview */}
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="mb-5">
        {[{ title: "SEO Optimization", text: "Boost your website ranking with our expert SEO strategies.", link: "/seo" },
          { title: "Social Media Marketing", text: "Expand your brand presence on social media platforms.", link: "/smm" },
          { title: "Graphic Designing", text: "Get stunning designs for your marketing campaigns.", link: "/design" },
          { title: "Content Marketing", text: "Engaging and high-quality content to grow your business.", link: "/content" },
          { title: "Email Marketing", text: "Reach your audience effectively through targeted email campaigns.", link: "/email" },
          { title: "PPC Advertising", text: "Maximize your ROI with data-driven paid campaigns.", link: "/ppc" }
        ].map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="shadow-sm border">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
                <Button variant="primary" onClick={() => navigate(service.link)}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* About Section */}
      <div className="mb-5 text-center border p-4">
        <h2>About Us</h2>
        <p>
          At GO Trendify, we provide the best digital marketing solutions to grow your business. 
          Our team specializes in SEO, Social Media Management, Content Creation, PPC Advertising, and more. 
        </p>
        <Button variant="primary" onClick={() => navigate("/about")}>Read More</Button>
      </div>
      
      {/* Our Vision and Goal */}
      <Row className="mb-5 align-items-center">
        <Col md={6} className="border p-4">
          <h2>Our Vision</h2>
          <p>Our vision is to revolutionize the digital marketing industry by providing cutting-edge solutions that drive real results.</p>
        </Col>
        <Col md={6} className="border p-4">
          <h2>Our Goal</h2>
          <p>We aim to empower businesses with the latest marketing techniques, ensuring growth, engagement, and success in the digital world.</p>
        </Col>
      </Row>
      
      {/* Testimonials */}
      <div className="mb-5 text-center">
        <h2>What Our Clients Say</h2>
        <Row className="justify-content-center">
          <Col md={6} className="border p-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text className="text-center">"{testimonials[testimonialIndex].text}"</Card.Text>
                <p className="text-center"><strong>- {testimonials[testimonialIndex].name}</strong></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      
      {/* Contact Section */}
      <div className="mb-5 text-center border p-4">
        <h2>Get in Touch</h2>
        <p>Email: contact@gotrendify.com | Phone: +91 9341436937</p>
        <Button variant="success" onClick={() => navigate("/contact")}>Contact Us</Button>
      </div>
    </Container>
  );
};

export default Home;
