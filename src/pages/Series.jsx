import React from 'react';
import sample from "../data/sample.json"

const Series = () => {
    return (
        <>
        <div className='bg-neutral-600 h-15 px-[10%] text-white flex items-center justify-between shadow-xl/30'>
            <h1 className='text-3xl text-shadow-lg'>Popular Series</h1>
        </div>
        <div className='h-full px-[10%] py-10 grid items-start place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10'>
            {sample.entries.slice(0, 21).map((title)=>{
                if(!(title.programType === "series"&& title.releaseYear >=2010)) return null;
                return (
                    <div>
                        <div style={{backgroundImage:`url(${title.images['Poster Art'].url})`}} className='bg-neutral-800 bg-cover bg-center w-55 h-70 flex items-center justify-center mb-2 hover:opacity-50 hover:border-4 hover:border-white'>
                        </div>
                        <h3 className='text-xl max-w-55'>{title.title}</h3>
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Series;
