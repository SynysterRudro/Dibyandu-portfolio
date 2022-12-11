import React from 'react';
import Typical from 'react-typical'
import img from '../../../images/rudro.jpg';

const Banner = () => {
    return (
        <div className='my-20'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img} className="max-w-sm lg:w-full rounded-lg shadow-2xl" alt='cover' />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-2xl font-bold">N Dibyandu Singha Rowdra</h1>
                        <div className='text-xl mb-6'>
                            <Typical
                                steps={['Front-end Developer', 500, 'Backend Developer', 500]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;