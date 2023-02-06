import React from 'react';
import Trailer from '../media/movie.mp4';
import Typewriter from 'typewriter-effect';
import {AiOutlineSearch} from 'react-icons/ai';
// import { Parallax } from 'react-parallax';


const Movie = () => {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={Trailer} autoPlay loop muted/>
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


{/* <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100'>
<input type="text" placeholder='Trouver des activités' className='bg-transparent w-[300px] sm:w-[400px] font-[Lora] focus:outline-none text-2xl'/>
<div>
<button><AiOutlineSearch size={20} className='icon'/></button>
</div>
</form> */}

