import React from 'react'
import {FaPlaneArrival, FaChurch} from 'react-icons/fa'
import {GiPositionMarker, GiBigDiamondRing} from 'react-icons/gi'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Beach from '../images/beach2.jpg'

const Infos =() => {
    return (
        <div>
            <div className='pt-20 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className ='text-[#61B6B5]'>Départ en</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#CEA450]'>Guadeloupe</h1>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#307C7C]'>Départ à 12h20 de Paris et arrivée à 15h20 Pointe-à-Pitre.</h2>
                <p className='text-[#307C7C] py-4 max-w-[700px]'>Pensez à vous munir de votre passeport ou carte d'identité (en cours de validité).
                   Il faut être sur place minimum deux heures avant l'embarquement.</p>
            </div>
            <div className='pt-20 sm:pt-40 px-4 flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className ='text-pink-600 text-left'>Samedi 3 juin 2023 à 15h</p>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#CEA450] border-b-4 border-pink-600'> Mariage </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-2xl font-bold text-[#307C7C]'>
                        <p>La cérémonie religieuse aura lieu à l'église de la ville de Goyave suivi de la soirée à l'habitation Saint-Charles</p>
                    </div>
                <div>
                    <p className='text-[#AE682E]'>Pas de dress code particulier pour le Jour J mais si vous avez du bleu ou une pointe de bleu c'est parfait</p>
                    <div className='grid sm:grid-cols-2'>   
                        <button className='text-white border-2 px-6 py-3 my-2 flex items-center max-w-[190px] max-h-[30px]'>Adresse Eglise <HiArrowNarrowRight className='ml-2'/></button>
                        <button className='text-white border-2 px-6 py-3 my-2 flex items-center max-w-[190px] max-h-[30px]'>Adresse Soirée <HiArrowNarrowRight className='ml-2'/></button>
                    </div> 
                </div>
                </div>
            </div>
            <div className='pt-20 sm:pt-40 px-4 flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className ='text-pink-600 text-left'>Propositions d'activités</p>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#CEA450] border-b-4 border-pink-600'> Ensemble </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-2xl font-bold text-[#307C7C]'>
                        <p>Nous vous proposons de découvrir sur la journée "Petite terre" une réserve naturelle et de faire un autre soir un barbecue géant</p>
                    </div>
                <div>
                    <p className='text-[#AE682E]'>Pour l'excursion à "Petite terre" il faut compter 110 euros. Pour y aller il faut prendre le bateau.</p>
                </div>
                </div>
            </div>
        </div>
         );   
}

export default Infos