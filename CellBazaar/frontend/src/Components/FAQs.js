import login from "./Login.css";
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
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
    // Add more FAQs as needed
  ]);

  const [visibleFAQs, setVisibleFAQs] = useState(3);

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
    marginTop: '35px',  
    color: '#333',
  };
  

  const faqCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFDAB9', // Lighter orange
    maxHeight: '200px', // Maximum height for the FAQ card
    overflowY: 'auto', // Add scrollbar for longer questions
    position: 'relative', // Make the position relative
  };

  const formStyle = {
    marginTop: '30px',
  };

  const viewMoreButtonStyle = {
    backgroundColor: '#FFA500', // Orange color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const viewMoreHandler = () => {
    setVisibleFAQs((prevVisibleFAQs) => prevVisibleFAQs + 3);
  };

  const editDeleteIconsStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    display: 'flex',
    flexDirection: 'column', // Display buttons in a column
    gap: '10px',
  };

  const handleEditQuestion = (id) => {
    // Add logic for editing a question
    console.log(`Edit question with ID ${id}`);
  };

  const handleDeleteQuestion = (id) => {
    // Add logic for deleting a question
    console.log(`Delete question with ID ${id}`);
  };

  return (
    <div>
      <Menubar />
      <div className="container" style={faqStyle}>
        <h1 style={headingStyle}>Frequently Asked Questions (FAQs)</h1>
        <div className="row">
          {faqs.slice(0, visibleFAQs).map((faq) => (
            <div key={faq.id} className="col-md-12">
              <div style={faqCardStyle}>
                <h3 style={{ marginBottom: '10px' }}>{faq.name}</h3>
                <p style={{ marginBottom: '10px', maxHeight: '50px', overflowY: 'auto' }}>
                  {faq.question}
                </p>
                <p>Answer: {faq.answer}</p>
                <div style={editDeleteIconsStyle}>
                  <FaEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleEditQuestion(faq.id)} />
                  <FaTrash style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDeleteQuestion(faq.id)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleFAQs < faqs.length && (
          <div className="d-flex justify-content-center">
            <button style={viewMoreButtonStyle} onClick={viewMoreHandler}>
              View More
            </button>
          </div>
        )}
        <hr />
        <h2>Ask a New Question</h2>
        <form onSubmit={handleSubmitQuestion} style={formStyle}>
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
