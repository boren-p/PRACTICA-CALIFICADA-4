import React from 'react';
import sample from "../data/sample.json";
import { Link } from 'react-router-dom';

const Movies = () => {
    return (
        <>
        <div className='relative bg-neutral-600 h-15 px-[10%] text-white flex items-center justify-between shadow-xl/30'>
            <h1 className='text-3xl text-shadow-lg'>Popular Movies</h1>
        </div>
        <div className='h-full px-[10%] py-10 grid items-start place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 '>
            {sample.entries.map((title)=>{
                if(!(title.programType === "movie"&& title.releaseYear >=2010)) return null;
                return (
                    <div>
                        <div style={{backgroundImage:`url(${title.images['Poster Art'].url})`}} className='bg-neutral-800 bg-cover bg-center w-55 h-70 flex items-center justify-center mb-2 hover:opacity-50 hover:border-4 hover:border-white'>
                        </div>
                        <h3 className='text-xl max-w-55'>{title.title}</h3>
                    </div>
                )
            })}
        </div>
        <div className="fixed hidden items-center justify-center top-0 left-0">
            <div className="h-screen w-screen bg-neutral-800 opacity-70"></div>
            <div className='fixed bg-white h-120 w-200'>hola</div>
        </div>
        </>
    );
}

export default Movies;
