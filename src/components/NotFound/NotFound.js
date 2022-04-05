import React from 'react';
import myImage from '../../image/404-pages.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={myImage} alt=""/>
            <h1 className='text-4xl mt-2 font-bold'>NOT FOUND</h1>
        </div>
    );
};

export default NotFound;