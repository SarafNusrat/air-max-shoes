import React from 'react';



const Blogs = () => {
    return (
        <div className='flex mx-auto border-blue-500 border-opacity-25 gap-4 mt-4'>
            <div className='border-1 p-5 border-blue-600 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-blue-100'>
                <h2 className='font-bold text-blue-700'>
                   What is context API?</h2>             
                <p>React context API is the process of declaring global variables within the react app. By this, it allows one to share the shate of one component among all. Sometimes, multiple components need one information. At that time, if an user declares global variables, he/she doesn't have to repeat the same code. By this, effiency is increased.</p>
            </div>
            <div className='border-1 p-5 border-blue-600 border-opacity-50 mt-4 mb-4 ml-12 mr-12 bg-blue-100'>
                <h2 className='font-bold text-blue-700'>What is semantic tag?</h2>
                <p>Semantic tags are the tags which are both useful to browser and the developer. By the name of sematic tags, it is almost understable the activity of the particular tag. Some of the examples of semantic tags are: form, table, article etc. To be short, these are the tags which clearly describe their meaning in a human-readable way. It becomes easy for the developers when we use semantic tags.</p>
            </div>
            
        </div>
    );
};

export default Blogs;