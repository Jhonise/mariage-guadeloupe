import React from 'react';

const activity =({id, nom, alt}) =>{
    return (
        <div>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 hover:scale-105 duration-300 transition-all' src={require(`../images/${id}`)} alt='test'/>
            <div className='relative'>
                <div className='z-20 absolute bottom-0 left-0 right-0 px-4 py-5 bg-gray-800 opacity-70'>
                    <h2 className='z-30 left-4 bottom-2 text-xl font-bold text-white absolute'>{nom}</h2>
                </div>
                <p className='hidden'>{alt}</p>
            </div>
        </div>
    )
}

export default activity
