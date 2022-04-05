import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, img, review, rating} = props.review;
    return (
        <div id='all-review' className='ml-20'>
               <div>
                   <img src={img} alt=""></img>
               </div>
               <div className='mt-4 review-item-details justify-center'>
                   <h4 className='font-bold text-xl text-blue-900'>{name}</h4>
                   <p className='italic'>"{review}"</p>
                   <p className='text-orange-400 font-bold mt-2'>Rating: <span>{rating}</span></p>
               </div>
        </div>
    );
};

export default Review;