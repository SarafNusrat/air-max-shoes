import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const HomeReview = (props) => {
    let [reviews, setReviews] = useReviews();
    const slicedReview = reviews.slice(2,5);

    return (
        <div className='grid grid-cols-2 gap-1'>
        {
            slicedReview.map(review => <Review
                 key = {review.id}
                 review = {review}
            ></Review>)
         }   
     </div>   
    );
};

export default HomeReview;


