import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Marketing",
      category: "Trends",
      excerpt: "Explore the latest trends that are shaping the future of digital marketing in 2025.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "SEO Best Practices for 2024",
      category: "SEO",
      excerpt: "Learn the essential SEO techniques to improve your website ranking this year.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Social Media Strategies That Work",
      category: "Social Media",
      excerpt: "Discover powerful strategies to grow your brand on social media platforms.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Email Marketing: Do's and Don'ts",
      category: "Email Marketing",
      excerpt: "Optimize your email campaigns with these expert tips and avoid common mistakes.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "PPC Advertising: A Beginner’s Guide",
      category: "PPC",
      excerpt: "Step-by-step guide to launching successful PPC campaigns and maximizing ROI.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Content Writing Strategies for Better Engagement",
      category: "Content Writing",
      excerpt: "Learn how to create compelling content that engages your audience.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Graphic Design Trends in 2024",
      category: "Graphic Design",
      excerpt: "Stay updated with the latest design trends to make your visuals stand out.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Website Development: UX/UI Best Practices",
      category: "Web Development",
      excerpt: "Improve your website's user experience with these UX/UI design principles.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "The Importance of Local SEO for Small Businesses",
      category: "Local SEO",
      excerpt: "Learn how local SEO can help your business attract more customers.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Influencer Marketing: How to Collaborate Effectively",
      category: "Influencer Marketing",
      excerpt: "Find out how to build successful influencer partnerships for your brand.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "The Role of AI in Digital Marketing",
      category: "AI & Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "How to Optimize Your Website for Mobile Users",
      category: "Mobile Optimization",
      excerpt: "Ensure your website provides a seamless experience on mobile devices.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Affiliate Marketing Strategies for 2024",
      category: "Affiliate Marketing",
      excerpt: "Boost your earnings with these top affiliate marketing strategies.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "The Power of Video Marketing",
      category: "Video Marketing",
      excerpt: "Learn how video content can enhance your brand’s online presence.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "E-commerce Marketing: Tips to Increase Sales",
      category: "E-commerce",
      excerpt: "Practical strategies to grow your online store and drive sales.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "The Psychology Behind Successful Ads",
      category: "Advertising",
      excerpt: "Explore how consumer psychology impacts ad success.",
      link: "#",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Growth Hacking Techniques for Startups",
      category: "Growth Hacking",
      excerpt: "Implement growth hacking strategies to scale your startup quickly.",
      link: "#",
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Blog</h2>
      <p className="text-center text-muted">Stay updated with the latest digital marketing insights.</p>
      
      <div className="row mt-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.category}</h6>
                <p className="card-text">{post.excerpt}</p>
                <a href={post.link} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
