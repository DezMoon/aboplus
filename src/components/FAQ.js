import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [email, setEmail] = useState("");

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission
    console.log("Email submitted:", email);
  };

  const faqData = [
    {
      question: "What is SVoD?",
      answer:
        "SVoD stands for Subscription Video on Demand. It is a streaming service that allows users to access a wide range of movies, TV shows, and other video content by subscribing to a monthly or yearly plan.",
    },
    {
      question: "How do I subscribe to SVoD?",
      answer:
        "Subscribing to SVoD is easy! Simply visit our website, choose a subscription plan that suits you, and follow the instructions to create an account and make the payment. Once subscribed, you can start enjoying unlimited content.",
    },
    {
      question: "Can I watch SVoD on multiple devices?",
      answer:
        "Yes, you can! SVoD offers multi-device support, which means you can watch your favorite movies and shows on various devices such as smartphones, tablets, smart TVs, and laptops. Just log in to your account on each device to start streaming.",
    },
    {
      question: "Do I need an internet connection to use SVoD?",
      answer:
        "Yes, SVoD requires a stable internet connection to stream content. You can watch videos in high quality, and the streaming experience may vary depending on your internet speed and connection.",
    },
    {
      question: "Can I download content for offline viewing?",
      answer:
        "Absolutely! SVoD offers the option to download select movies and TV shows for offline viewing. This is perfect for when you're traveling or in areas with limited internet connectivity.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial period for new users. During this trial period, you can explore the SVoD platform and enjoy a selection of content. After the trial period ends, you can choose to subscribe to a paid plan to continue accessing the full range of content.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            className={`faq-tile ${index === activeIndex ? "active" : ""}`}
            key={index}>
            <div className="question" onClick={() => handleToggle(index)}>
              {faq.question}
              <span className="expand-icon">
                {index === activeIndex ? "-" : "+"}
              </span>
            </div>
            <div className="answer">{faq.answer}</div>
          </div>
        ))}
      </div>

      <div className="cta-container">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">
            Get started <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;
