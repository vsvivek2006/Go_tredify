import React, { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: "SEO", description: "Optimize your website to rank higher on search engines and attract more traffic.", details: "Our SEO services include keyword research, on-page optimization, link building, and analytics tracking to ensure your website ranks higher and gains more organic traffic." },
    { title: "Social Media Management", description: "Enhance your brand presence and engagement on social media platforms.", details: "We create engaging content, schedule posts, analyze insights, and manage social media campaigns to grow your online presence." },
    { title: "Graphics Designing", description: "Create visually appealing graphics for your brand, website, and social media.", details: "Our team designs high-quality logos, banners, brochures, and other branding materials to enhance your visual identity." },
    { title: "Web Development", description: "Develop high-performance websites and web applications tailored to your needs.", details: "We build responsive and user-friendly websites using the latest technologies like React, Laravel, and Node.js." },
    { title: "Mobile App Development", description: "Build user-friendly mobile applications for Android and iOS.", details: "We develop feature-rich mobile apps using Flutter and native technologies for a seamless user experience." },
    { title: "PPC Advertising", description: "Run high-converting ad campaigns on Google and social media.", details: "Our PPC campaigns are designed to maximize ROI with targeted ads, compelling copy, and continuous optimization." },
    { title: "Content Writing", description: "Craft compelling and SEO-friendly content to engage your audience.", details: "Our writers create high-quality blogs, articles, and website content that attracts and retains customers." },
    { title: "E-commerce Solutions", description: "Launch and manage your online store with our e-commerce services.", details: "We offer complete e-commerce development, including Shopify, WooCommerce, and custom solutions." },
    { title: "Digital Marketing", description: "Boost your online presence with our expert digital marketing strategies.", details: "We provide a mix of SEO, PPC, email marketing, and content strategies to grow your business online." },
    { title: "Influencer Marketing", description: "Collaborate with influencers to expand your brand reach.", details: "We connect brands with top influencers to create impactful marketing campaigns." },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center text-muted">We offer a wide range of digital solutions to grow your business.</p>
      
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <button className="btn btn-primary" onClick={() => setSelectedService(service)}>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal" style={{ display: "block", background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedService.title}</h5>
                <button className="close" onClick={() => setSelectedService(null)}>×</button>
              </div>
              <div className="modal-body">
                <p>{selectedService.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
