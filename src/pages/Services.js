import React, { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: "SEO", 
      description: "Optimize your website to rank higher on search engines and attract more traffic.", 
      details: "Search Engine Optimization (SEO) is a crucial strategy for improving your website's visibility on search engines like Google. Our SEO services include keyword research, on-page optimization, link building, and analytics tracking to ensure your website ranks higher in search results. This results in increased organic traffic, greater brand exposure, and ultimately more conversions. Our experts stay updated with the latest SEO trends to ensure your website maintains a competitive edge." 
    },
    { 
      title: "Social Media Management", 
      description: "Enhance your brand presence and engagement on social media platforms.", 
      details: "Social Media Management is essential for brands to stay connected with their audience and grow their presence online. We focus on creating engaging content that resonates with your target audience, scheduling posts for maximum reach, and analyzing insights to refine strategies. Our team manages all aspects of your social media accounts, ensuring consistency and interaction with your followers. Whether it’s Instagram, Facebook, Twitter, or LinkedIn, we make sure your brand stays top of mind for potential customers." 
    },
    { 
      title: "Graphics Designing", 
      description: "Create visually appealing graphics for your brand, website, and social media.", 
      details: "Good design is the foundation of a strong brand identity. Our graphic design services include the creation of custom logos, banners, brochures, social media posts, and other visual materials that accurately reflect your brand’s personality. We work closely with you to ensure that the designs align with your vision, using the latest design trends and tools. Whether you need a complete brand overhaul or a new promotional asset, our team will deliver high-quality designs that captivate your audience and convey your message effectively." 
    },
    { 
      title: "Web Development", 
      description: "Develop high-performance websites and web applications tailored to your needs.", 
      details: "Web development is at the core of creating a strong online presence. We specialize in building responsive, user-friendly websites and web applications that are tailored to meet your specific business needs. Our development process involves using cutting-edge technologies such as React, Laravel, and Node.js to ensure that your website performs well on any device. From e-commerce platforms to custom web applications, our team works to create seamless, fast, and secure web experiences for your users." 
    },
    { 
      title: "Mobile App Development", 
      description: "Build user-friendly mobile applications for Android and iOS.", 
      details: "Mobile apps are essential for engaging with users on-the-go. We specialize in building intuitive mobile apps that work seamlessly on both Android and iOS platforms. Whether you're looking to develop a simple app or a feature-rich solution, our team uses technologies like Flutter and native programming to create apps that are fast, reliable, and user-friendly. Our focus is to deliver apps that enhance the user experience while meeting your business goals." 
    },
    { 
      title: "PPC Advertising", 
      description: "Run high-converting ad campaigns on Google and social media.", 
      details: "Pay-per-click (PPC) advertising is a cost-effective way to drive targeted traffic to your website. We create customized PPC campaigns that target the right audience and maximize your return on investment (ROI). Our experts focus on choosing the right keywords, writing compelling ad copy, and continuously optimizing your campaigns for better performance. We run PPC ads across platforms such as Google Ads, Facebook, and Instagram, ensuring that your brand gets the visibility it deserves while maintaining cost efficiency." 
    },
    { 
      title: "Content Writing", 
      description: "Craft compelling and SEO-friendly content to engage your audience.", 
      details: "High-quality content is key to engaging your audience and improving search engine rankings. Our content writing services include creating SEO-optimized blogs, articles, and website content that not only attract traffic but also keep readers engaged. Whether you need informative articles, product descriptions, or long-form blogs, we craft content that resonates with your audience and drives action. Our team ensures that all content is well-researched, engaging, and written to deliver measurable results for your brand." 
    },
    { 
      title: "E-commerce Solutions", 
      description: "Launch and manage your online store with our e-commerce services.", 
      details: "Starting an e-commerce business requires the right platform and features to succeed. We provide end-to-end e-commerce development services, helping you launch and manage your online store with ease. Our team is skilled in platforms like Shopify, WooCommerce, and custom-built solutions. We offer everything from setting up product catalogs to integrating payment gateways, ensuring that your store runs smoothly and efficiently. With our expertise, your e-commerce site will provide a great shopping experience for your customers while driving sales." 
    },
    { 
      title: "Digital Marketing", 
      description: "Boost your online presence with our expert digital marketing strategies.", 
      details: "Digital marketing encompasses a variety of strategies to improve your online presence and drive business growth. Our services include SEO, PPC, email marketing, social media management, and more. We tailor our strategies based on your business goals, focusing on increasing visibility, driving traffic, and converting leads into customers. Our approach is data-driven, and we continuously monitor and optimize your campaigns for maximum performance, ensuring that your brand gets the best return on investment." 
    },
    { 
      title: "Influencer Marketing", 
      description: "Collaborate with influencers to expand your brand reach.", 
      details: "Influencer marketing is a powerful way to increase brand awareness and build trust with potential customers. We connect your brand with top influencers in your industry, creating collaborative campaigns that engage their followers. By leveraging the influence of these personalities, we help you reach a broader audience and gain credibility in the market. Our team manages the entire process, from identifying the right influencers to tracking campaign performance, ensuring that your brand message resonates with the target audience." 
    },
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
          <div className="modal-dialog modal-dialog-centered">
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
