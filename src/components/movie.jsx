import React from 'react';
import Trailer from '../media/movie.mp4';
import Typewriter from 'typewriter-effect';



const Movie = () => {
    return (
        <div className='w-full h-screen relative'>
            <video className='object-cover w-screen h-screen' src={Trailer} autoPlay loop muted/>
            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div>
            <div className='absolute w-full h-full top-0 flex flex-col justify-center text-center text-white p-4 text-3xl md:text-4xl font-bold'>
                <div className='py-10 text-xl' class='style'>
                    <Typewriter 
                        onInit={(typewriter) => {
                        typewriter.typeString('Venez découvrir la Guadeloupe')
                        .pauseFor(300)
                        .deleteChars(50)
                        .typeString("Mariage Angélique & Jonathan")
                        .pauseFor(1000)
                        .start();
                        
                    }}
                    />
                </div>
            </div>
        </div>
    )
}


export default Movie


