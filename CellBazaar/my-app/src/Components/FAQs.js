import login from "./Login.css"
import React, { useState } from 'react';
import Menubar from "./Navbr";

const FAQs = () => {
  const [newQuestion, setNewQuestion] = useState({ name: '', question: '' });
  const [faqs, setFAQs] = useState([
    {
      id: 1,
      name: 'Ali',
      question: 'What are the latest smartphone models available?',
      answer: 'We currently have the latest iPhone, Samsung, and Google Pixel models in stock.',
    },
    {
      id: 2,
      name: 'Fatima',
      question: 'Do you offer any discounts on bulk orders?',
      answer: 'Yes, we provide discounts on bulk orders. Please contact our customer support for more details.',
    },
    {
      id: 3,
      name: 'Ahmed',
      question: 'Is there a warranty on the phones?',
      answer: 'Yes, all our phones come with a standard warranty. Extended warranty options are also available.',
    },
  ]);

  const handleSubmitQuestion = (e) => {
    e.preventDefault();

    // Generate a unique ID for the new question
    const newQuestionWithId = { ...newQuestion, id: faqs.length + 1 };

    // Update the FAQs state with the new question
    setFAQs([...faqs, newQuestionWithId]);

    // Clear the form fields after submission
    setNewQuestion({ name: '', question: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const faqStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f8f8f8',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
  };

  const faqCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  };

  return (
    <div >
        <Menubar/>
      <div className="container" style={{marginTop:"7rem"}}>
        <h1 style={headingStyle}>Frequently Asked Questions (FAQs)</h1>
        <div>
          {faqs.map((faq) => (
            <div key={faq.id} style={faqCardStyle}>
              <h3>{faq.name}</h3>
              <p>Question: {faq.question}</p>
              <p>Answer: {faq.answer}</p>
            </div>
          ))}
        </div>
        <hr />
        <h2>Ask a New Question</h2>
        <form onSubmit={handleSubmitQuestion}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newQuestion.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="question" className="form-label">
              Your Question:
            </label>
            <textarea
              className="form-control"
              id="question"
              name="question"
              value={newQuestion.question}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQs;
