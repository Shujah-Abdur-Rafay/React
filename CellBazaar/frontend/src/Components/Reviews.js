import React, { useState } from 'react';
import login from "./Login.css"
import Menubar from './Navbr';

const Reviews = () => {
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Akram Bhatti', rating: 5, comment: 'Great service! I love my new phone.' },
    { id: 2, name: 'Choudhary Aslam Gujjar', rating: 4, comment: 'Fast shipping and excellent customer support.' },
    { id: 3, name: 'Shubana Naseem', rating: 5, comment: 'Highly recommended. Quality products.' },
  ]);

  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Generate a unique ID for the new review
    const newReviewWithId = { ...newReview, id: reviews.length + 1 };

    // Update the reviews state with the new review
    setReviews([...reviews, newReviewWithId]);

    // Clear the form fields after submission
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const reviewStyle = {
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

  const reviewCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  };

  return (
    <div >
        <Menubar/>
      <div className="container" style={{marginTop:"7rem"}}>
        <h1 style={headingStyle}>Customer Reviews</h1>
        <div>
          {reviews.map((review) => (
            <div key={review.id} style={reviewCardStyle}>
              <h3>{review.name}</h3>
              <p>Rating: {review.rating} stars</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
        <hr />
        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmitReview}>
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
