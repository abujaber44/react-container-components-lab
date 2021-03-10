import React from 'react';

const MovieReviews = ({ reviews }) => {
    let i = 0;
    
    return (
        <div className="review-list">
            <ul>
            {reviews.map(review => 
                <div className="review">
                    <li>
                    <h3>{review.headline}</h3>
                    <h4>By: {review.byline}</h4>
                    <p>{review.summary_short}</p>
                    </li>
                </div>
            )
            }
            </ul>
        </div>
    )
};

export default MovieReviews
