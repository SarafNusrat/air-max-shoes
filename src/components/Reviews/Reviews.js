import React from 'react';
import useShowReviews from '../../hooks/useShowReviews';

const Reviews = () => {
    const [reviews, setReviews] = useShowReviews([]);

    return (
        <div>
            <h2>This is reviews: {reviews.length}</h2>
        </div>
    );
};

export default Reviews;