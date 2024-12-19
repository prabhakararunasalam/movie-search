import React from 'react';
import {  FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = ({page, pageChange}) => {
    return (
        <div className='flex justify-center my-4 space-x-5'>
            <button 
            disabled={page <= 1}
            onClick={() => pageChange(page - 1)}
            className='px-4 py-2 border bg-blue-400 rounded-md'
            >
                <FaArrowLeft/> Previeous
            </button>
            <button
            onClick={() => pageChange(page + 1)}
            className='px-4 py-2 border bg-blue-400 rounded-md'
            >Next<FaArrowRight/></button>
        </div>
    );
};

export default Pagination;