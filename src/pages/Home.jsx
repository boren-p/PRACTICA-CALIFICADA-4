import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className='bg-neutral-600 h-15 px-[10%] text-white flex items-center justify-between shadow-xl/30'>
            <h1 className='text-3xl text-shadow-lg'>Popular Titles</h1>
        </div>
        <div className='h-screen px-[10%] py-10 flex gap-5'>
            <Link to="/series">
            <div>
                <div className='bg-neutral-800 w-55 h-70 flex items-center justify-center mb-2'>
                    <div style={{backgroundImage:'url(./assets/placeholder.png)'}} className='size-50 bg-center bg-cover flex items-center justify-center'>
                    <h1 className='text-5xl font-semibold text-shadow-lg text-white'>SERIES</h1>
                    </div>
                </div>
                <h3 className='text-xl'>Popular Series</h3>
            </div>
            </Link>
            <Link to="/movies">
            <div>
                <div className='bg-neutral-800 w-55 h-70 flex items-center justify-center mb-2'>
                    <div style={{backgroundImage:'url(./assets/placeholder.png)'}} className='size-50 bg-center bg-cover flex items-center justify-center'>
                    <h1 className=' text-5xl font-semibold text-shadow-lg text-white'>MOVIES</h1>
                    </div>
                </div>
                <h3 className='text-xl'>Popular Movies</h3>
            </div>
            </Link>
        </div>
        </>
    );
}

export default Home;
