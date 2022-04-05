import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2 className='text-4xl mt-6 mb-6 font-bold text-orange-600'>AIR MAX SHOES</h2>
            <nav className='flex flex-row align-text-bottom bg-blue-100 px-16 pt-2 pb-2'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="../Reviews">Reviews</CustomLink>
                <CustomLink to="../Dashboard">Dashboard</CustomLink>
                <CustomLink to="../Blogs">Blogs</CustomLink>
                <CustomLink to="../About">About</CustomLink>
            </nav>
        </div>
        
    );
};

export default Header;