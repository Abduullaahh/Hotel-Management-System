import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

export default function CostumerReviews() {
    const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className='cosrev-main' id='rev'>
        <h1>Customer Reviews</h1>
        <form className='rev-form' action="https://obsidian-spotted-jingle.glitch.me/userreview" method="post">
            <div>
                <input
                    placeholder='Name'
                    type='text'
                    id='name'
                    name='name'
                    required
                />
            </div>
            <div>
                <textarea
                    placeholder='Review'
                    id='review'
                    name='review'
                    required
                ></textarea>
            </div>
            <div className='rating'>
                <p>Rate us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <StarRatings
                    rating={rating}
                    starRatedColor="gold"
                    changeRating={handleRatingChange}
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="2px"
                    name='stars'
                />
            </div>
            <button className='rev-send-button' type='submit'>Post Review</button>
        </form>
    </div>
  );
}