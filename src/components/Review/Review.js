import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, img, review, rating} = props.review;
    return (
        <div id='all-review'>
            <h2>this is review: {name}</h2>
            <img src={img}></img>
        </div>
    );
};

export default Review;