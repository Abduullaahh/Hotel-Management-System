import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    fetch('https://obsidian-spotted-jingle.glitch.me/getreview')
      .then(response => response.json())
      .then(data => setReviewsList(data))
      .catch(error => console.error('Error fetching reviews data:', error));
  }, []);

  return (
    <div className='dash-rev-main'>
        <div>
            <Sidebar/>
        </div>
        <div className="dash-reviews">
            <h2>Guest Reviews</h2>
            <div className="reviews">
                {reviewsList.map(Review => (
                    <div key={Review.id} className="review-card">
                    <h3>Review: {Review.id}</h3>
                    <hr className="line" />
                    <p><b>Guest Name:</b> {Review.name}</p>
                    {/* <p>Rating: {review.rating}</p> */}
                    <p><b>Review:</b> {Review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}