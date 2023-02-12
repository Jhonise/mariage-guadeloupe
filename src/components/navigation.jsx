import React from 'react';
import Movie from './movie.jsx';
import Cote from '../images/cote700400.jpeg';
import Jardin from '../images/jardin700400.jpg';
import Plage from '../images/plage700400.jpg';
import Riviere from '../images/riviere700400.jpeg';
import Saintes from '../images/saintes700400.jpg';
import {Link} from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi';




const Navigation = () => {

    return (
        <div>
            <div>
                <Movie/>
            </div>
            <div className='pt-10 pb-10 sm:pt-20 px-4 flex flex-col justify-center items-center w-full h-full border-b-8' >
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right sm:pb-8 pb-4 pl-4'>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#CEA450] border-b-4 border-[#D34D2A]'> Tout savoir </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-lg font-bold text-[#307C7C]'>
                        <p>On vous a préparé un récapitulatif des infos majeures à retenir et on répond aux questions dans une FAQ</p>
                    </div>
                <div>
                    <p className='text-[#AE682E]'>Si vous trouvez pas la réponse, il y a toujours la conversation What's app</p>
                    <div className='grid sm:grid-cols-2 px-2 py-4'>   
                        <Link className ='px-3 text-[#D34D2A] font-bold ' to='/informations'> Informations utiles </Link>
                        <Link className ='px-3 text-[#D34D2A] font-bold' to='/faq'> FAQ </Link>
                    </div> 
                </div>
                </div>
            </div>

            <div className='max-w-[1140px] m-auto w-full px-4 pb-10 sm:py-12 '>
                <h1 class='text-center font-bold text-[#CEA450] pb-10 text-4xl sm:text-7xl'>Découvrir la Guadeloupe</h1>
                <div className ='text-center  font-bold text-[#307C7C] pb-10'>
                    <p class="text-[#D34D2A]">On vous donne nos bons plans ! </p>
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
                        <Link className ='absolute z-10 top-6 left-2 px-3 text-[#D34D2A] font-bold' to='/activites'> Notre sélection <HiArrowNarrowRight className='ml-2'/></Link>
                        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Cote} alt='/' />   
                    </div>
                </div>
            </div>


            <div className='pt-10 pb-20 sm:pt-20 px-4 flex flex-col justify-center items-center w-full h-full border-t-8'>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right sm:pb-8 pb-4 pl-4'>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#CEA450] border-b-4 border-[#D34D2A]'> Annou ay !</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-lg font-bold text-[#307C7C]'>
                        <p>On vous dit tout sur notre planning et si les activités vous intéresse venez avec nous. </p>
                    </div>
                <div>
                    <p className='text-[#AE682E]'>Pas malade en bateau ? Une activité à ne pas louper : excursion dans la réserve naturelle de Petite terre.</p>
                    <div className='grid sm:grid-cols-2  pt-4'>   
                        <Link className ='px-3 text-[#D34D2A] font-bold ' to='/agenda'> Agenda des mariés </Link>
                    </div> 
                </div>
                </div>
            </div>


        </div>
    )
}


export default Navigation