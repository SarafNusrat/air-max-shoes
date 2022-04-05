import React from 'react';
import shoesImage from '../../image/air-max-270-mens-shoes-KkLcGR.jpg';

const Home = () => {
    return (
        <div>
            <div className="flex rounded overflow-hidden shadow-lg">
               <div className="content-center px-5">
                  <h1 className="font-bold text-5xl mt-14 pt-14 mb-2 text-blue-200">GRAB YOUR BEST SHOES</h1>
                  <h1 className="font-bold text-5xl mt-4 mb-2 text-orange-600">TODAY</h1>
                  <p className="text-gray-700 text-base ml-4 pr-16 pl-16 mt-6">
                  Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons showcasing Nike's greatest innovation.
                    </p>
                </div>
                <div>
                 <img className="w-full mr-16" src={shoesImage} alt=""/> 
                </div>
            </div>
        </div>
    );
};

export default Home;