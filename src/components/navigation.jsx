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
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#00739F] border-b-4 border-[#FDB400]'> Tout savoir </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-lg font-bold text-[#808080]'>
                        <p>On vous a préparé un récapitulatif des infos majeures dans informations utiles et on répond aux questions dans une FAQ accessible ci-dessous</p>
                    </div>
                <div>
                    <p className='text-[#0085B8]'>Si vous ne trouvez pas la réponse, il y a toujours la conversation WhatsApp</p>
                    <div className='grid sm:grid-cols-2 px-2 py-4'>   
                        <Link className ='px-3 text-[#00739F] font-bold ' to='/informations'> Informations utiles <HiArrowNarrowRight className='ml-2'/></Link>
                        <Link className ='px-3 text-[#00739F] font-bold' to='/faq'> FAQ <HiArrowNarrowRight className='ml-2'/></Link>
                    </div> 
                </div>
                </div>
            </div>

            <div className='max-w-[1140px] m-auto w-full px-4 pb-10 sm:py-12 '>
                <h1 class='text-center font-bold text-[#00739F] pb-10 text-4xl sm:text-7xl'>Découvrir la Guadeloupe</h1>
                <div className ='text-center  font-bold text-[#60BA9D] pb-10'>
                    <p class="text-[#808080]">On vous donne nos bons plans ! </p>
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
                        <Link className ='absolute z-10 top-6 left-2 px-3 text-[#00739F] font-bold' to='/activites'> Notre sélection <HiArrowNarrowRight className='ml-2'/></Link>
                        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={Cote} alt='/' />   
                    </div>
                </div>
            </div>


            <div className='pt-10 pb-20 sm:pt-20 px-4 flex flex-col justify-center items-center w-full h-full border-t-8'>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right sm:pb-8 pb-4 pl-4'>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#00739F] border-b-4 border-[#FDB400]'> Annou ay !</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-lg font-bold text-[#808080]'>
                        <p>On vous dit tout sur notre planning, sentez-vous libre de venir avec nous ! </p>
                    </div>
                <div>
                    <p className='text-[#AE682E]'>Vous avez le pied marin ? Une activité à ne pas louper : excursion dans la réserve naturelle de Petite terre.</p>
                    <div className='grid sm:grid-cols-2  pt-4'>   
                        <Link className ='px-3 text-[#00739F] font-bold ' to='/agenda'> Agenda des mariés <HiArrowNarrowRight className='ml-2'/></Link>
                    </div> 
                </div>
                </div>
            </div>


        </div>
    )
}


export default Navigation