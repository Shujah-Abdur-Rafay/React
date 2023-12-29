import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Menubar from './Navbr';

const Reviews = () => {
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Akram Bhatti', rating: 5, comment: 'Great service! I love my new phone.' },
    { id: 2, name: 'Choudhary Aslam Gujjar', rating: 4, comment: 'Fast shipping and excellent customer support.' },
    { id: 3, name: 'Shubana Naseem', rating: 5, comment: 'Highly recommended. Quality products.' },
  ]);

  const [visibleReviews, setVisibleReviews] = useState(6);

  const handleSubmitReview = (e) => {
    e.preventDefault();

    const newReviewWithId = { ...newReview, id: reviews.length + 1 };

    setReviews([...reviews, newReviewWithId]);

    setNewReview({ name: '', rating: 5, comment: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleEditReview = (id) => {
    // Add logic for editing a review
    console.log(`Edit review with ID ${id}`);
  };

  const handleDeleteReview = (id) => {
    // Add logic for deleting a review
    console.log(`Delete review with ID ${id}`);
  };

  const reviewStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#FFEFD5', // Very light orange
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    marginTop: '35px', 
    color: '#333',
    textTransform: 'uppercase',
  };

  const reviewCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFDAB9', // Lighter orange
    maxHeight: '200px', // Maximum height for the review card
    overflowY: 'auto', // Add scrollbar for longer reviews
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
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
  };

  const editDeleteIconsStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    display: 'flex',
    gap: '10px',
  };

  return (
    <div>
      <Menubar />
      <div className="container" style={reviewStyle}>
        <h1 style={headingStyle}>Customer Reviews</h1>
        <div className="row">
          {reviews.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className="col-md-4">
              <div style={reviewCardStyle}>
                <h3 style={{ marginBottom: '10px' }}>{review.name}</h3>
                <p style={{ marginBottom: '10px', maxHeight: '50px', overflowY: 'auto' }}>
                  {review.comment}
                </p>
                <p>Rating: {review.rating} stars</p>
                <div style={editDeleteIconsStyle}>
                  <FaEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={() => handleEditReview(review.id)} />
                  <FaTrash style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDeleteReview(review.id)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleReviews < reviews.length && (
          <div className="d-flex justify-content-center">
            <button style={viewMoreButtonStyle} onClick={viewMoreHandler}>
              View More
            </button>
          </div>
        )}
        <hr />
        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmitReview} style={formStyle}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating:
            </label>
            <select
              className="form-control"
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} stars
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Your Review:
            </label>
            <textarea
              className="form-control"
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
