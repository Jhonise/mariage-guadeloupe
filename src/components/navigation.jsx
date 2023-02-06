import React from 'react';
import Movie from './movie.jsx';
import Cote from '../images/cote700400.jpeg';
import Jardin from '../images/jardin700400.jpg';
import Plage from '../images/plage700400.jpg';
import Riviere from '../images/riviere700400.jpeg';
import Saintes from '../images/saintes700400.jpg';
import {Link} from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi'




const Navigation = () => {

    return (
        <div>
            <div>
                <Movie/>
            </div>
            <div className='max-w-[1140px] m-auto w-full px-4 py-2 sm:py-12'>
                <h1 class='style font-bold text-[#CEA450] pb-10 sm:text-[70px]'>Découvrir la Guadeloupe</h1>
                <div className ='text-center  font-bold text-[#307C7C] pb-10'>
                    {/* <p>Par où commencer ? Promenades ? Plages ? <br/> </p> */}
                    <p class="text-pink-600">On vous donne nos bons plans ! </p>
                </div>
                <div className='grid sm:grid-cols-5 gap-4'>
                    <div className='sm:col-span-3 col-span-2 row-span-2'>
                        <img className='w-full h-full object-cover' src={Saintes} alt='/' />
                    </div>
                    <div>
                        <img className='w-full h-full object-cover' src={Jardin} alt='/' />
                    </div>
                    <div>
                        <img className='w-full h-full object-cover' src={Plage} alt='/' />
                    </div>
                    <div>
                        <img className='w-full h-full object-cover' src={Riviere} alt='/' />
                    </div>
                    <div class='bg-gray-200/[0.7] w-full relative'>
                        <Link className ='absolute z-10 top-6 left-2 px-3 text-pink-600 font-bold' to='/activites'> Notre sélection <HiArrowNarrowRight className='ml-2'/></Link>
                        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Cote} alt='/' />   
                    </div>
                </div>
            </div>

            <div>
                
            </div>


        </div>
    )
}


export default Navigation