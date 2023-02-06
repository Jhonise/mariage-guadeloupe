import React from 'react';
import Cote from '../images/cote.jpeg';
import Jardin from '../images/jardin.jpg';
import Plage from '../images/plage.jpg';
import Riviere from '../images/riviere.jpeg';
import Saintes from '../images/saintes.jpg';
import ActivityList2 from './activitylist2.js';


const Destination = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>Activités</h1>
            <div className='grid grid-rows-none md:grid-cols-3 py-8 gap-2 md:gap-4 lg:grid-cols-3'>
                <div className='relative'>
                    <img className='z-10 w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Saintes} alt="" />
                    <div className='z-20 absolute bottom-0 left-0 right-0 px-4 py-5 bg-gray-800 opacity-70'>
                        <p className='z-30 left-4 bottom-2 text-xl font-bold text-white absolute'>Les îles des Saintes</p>
                    </div>
                </div>
                <img className='w-full h-full object-cover' src={Cote} alt="" />
                <img className='w-full h-full object-cover' src={Jardin} alt="" />
                <img className='w-full h-full object-cover' src={Plage} alt="" />
                <img className='w-full h-full object-cover' src={Riviere} alt="" />
            </div>
            <div>
                        <ActivityList2/>
            </div>
            </div>
            )
            }


export default Destination