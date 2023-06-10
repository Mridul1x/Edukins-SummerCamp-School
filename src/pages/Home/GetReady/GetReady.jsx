import React from 'react';
import camp1 from "../../../assets/camp1.svg"
import camp2 from "../../../assets/camp2.png"
import "./GetReady.css"


const GetReady = () => {
    return (
        <div className='flex gradient justify-center items-center'>
           <img className='w-5/12 lg:w-3/12 ' src={camp1} alt="" />
           <img className='w-5/12 lg:w-3/12' src={camp2} alt="" />
        </div>
    );
};

export default GetReady;