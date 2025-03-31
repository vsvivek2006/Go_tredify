import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      
      <p className="text-muted text-center">
        We are a leading digital marketing agency dedicated to helping businesses grow online with cutting-edge strategies and innovative solutions.
      </p>
      
      <section className="mt-4 d-flex align-items-center border p-4 rounded">
        <div className="col-md-6">
          <img src="https://img.freepik.com/free-vector/illustration-business-target-icon_53876-5898.jpg?t=st=1743422332~exp=1743425932~hmac=5462bf3ca7c45076ebcad1b3f35d7229fa96b6d04c80e7c3423f7c5013ed5449&w=826" alt="Our Mission" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower businesses with the best digital marketing strategies, tools, and expertise. We strive to enhance brand visibility, increase customer engagement, and drive sustainable growth through innovative digital solutions.
          </p>
        </div>
      </section>
      
      <section className="mt-4 d-flex align-items-center border p-4 rounded">
        <div className="col-md-6 order-md-2">
          <img src="https://img.freepik.com/free-photo/magnifying-glass-enlarging-word_1134-334.jpg?t=st=1743422739~exp=1743426339~hmac=399e2dc961b09f75ccec1b31ee1ff7b209fdb83b86ff201e3c86ad737985df5a&w=1380" alt="Our Vision" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 order-md-1">
          <h3>Our Vision</h3>
          <p>
            Our vision is to be the most trusted and results-driven digital marketing agency, helping brands navigate the digital landscape and achieve their full potential. We aim to set new industry benchmarks with our commitment to excellence and customer success.
          </p>
        </div>
      </section>
      
      <section className="mt-4 d-flex align-items-center border p-4 rounded">
        <div className="col-md-6">
          <img src="https://img.freepik.com/free-photo/business-man-holding-clipboard-with-why-choose-us-question_23-2148932318.jpg?t=st=1743423405~exp=1743427005~hmac=d6d84b7659109c10e764952febdb1fa03bf63a89a7f96422d72678066f7370d4&w=1380" alt="Why Choose Us" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 text-left">
          <h3>Why Choose Us?</h3>
          <ul className="list-unstyled">
            <li><strong>Experienced Professionals:</strong> Our team consists of industry experts with years of experience.</li>
            <li><strong>Custom Strategies:</strong> Tailored digital marketing solutions for your business needs.</li>
            <li><strong>Data-Driven Insights:</strong> Making informed decisions based on real-time data.</li>
            <li><strong>Transparency & Trust:</strong> We prioritize open communication and honesty.</li>
            <li><strong>Continuous Growth:</strong> We adapt and evolve with the latest trends in digital marketing.</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-4 text-center border p-4 rounded">
        <h3>Meet Our Team</h3>
        <div className="row">
        {[{ name: "Rahul Sharma", position: "Founder & CEO", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Amit Verma", position: "Co-Founder & COO", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Neha Singh", position: "Head of Marketing", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Vikram Patel", position: "SEO Specialist", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Pooja Yadav", position: "Social Media Manager", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Rohit Kumar", position: "Graphic Designer", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Anjali Mehra", position: "Content Strategist", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Arjun Das", position: "PPC Expert", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Simran Kaur", position: "Web Developer", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Kunal Joshi", position: "Email Marketing Specialist", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Rajesh Gupta", position: "Brand Strategist", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" },
            { name: "Priya Desai", position: "Customer Success Manager", img: "https://img.freepik.com/free-vector/salesman-composition-with-flat-design_23-2147872974.jpg", social: "#" }
          ].map((member, index) => (
            <div key={index} className="col-md-3 text-center mb-4">
              <img src={member.img} alt={member.name} className="img-fluid rounded-circle" style={{ width: "100px", height: "100px" }} />
              <h5 className="mt-2">{member.name}</h5>
              <p>{member.position}</p>
              <a href={member.social} className="btn btn-primary btn-sm">Connect</a>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-4 d-flex align-items-center border p-4 rounded">
        <div className="col-md-6">
          <img src="https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35046.jpg?t=st=1743423646~exp=1743427246~hmac=a271792f7f44d26b855a9559c4710c86cbec916e6bc4a5d8af9cdfb72a4938ec&w=1380" alt="Our Achievements" className="img-fluid rounded border" />
        </div>
        <div className="col-md-6 text-right">
          <h3>Our Achievements</h3>
          <p>We have successfully worked with over 500 clients, delivered 1000+ campaigns, and helped businesses grow exponentially.</p>
        </div>
      </section>
      
      <section className="mt-4 text-center border p-4 rounded">
        <h3>Client Testimonials</h3>
        <p>"Go Trendify helped us increase our online presence and drive more traffic. Highly recommended!" - Ramesh Patel</p>
        <p>"Their SEO strategies have given us amazing results. A dedicated and professional team!" - Anjali Khanna</p>
      </section>
      
      <section className="mt-4 d-flex justify-content-between align-items-center border p-4 rounded">
        <div className="col-md-8">
          <h3>Get in Touch</h3>
          <p>
            Have questions or need our services? Our team is here to help! Reach out to us anytime, and let's grow your brand together.
          </p>
        </div>
        <div className="col-md-4 text-right">
          <button className="btn btn-primary" onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default About;
