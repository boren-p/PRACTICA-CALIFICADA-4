import React from 'react';
import Home from "../pages/Home";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-blue-600 h-15 px-[10%] text-white flex items-center justify-between shadow-xl/30 '>
            <Link to="/"><h1 className='text-4xl font-semibold text-shadow-lg'>DEMO Streaming</h1></Link>
            <div>
                <button className='px-4 py-1'>Log in</button>
                <button className='bg-neutral-600 px-4 py-1'>Start your free trial</button>
            </div>
        </div>
    );
}

export default Header;
