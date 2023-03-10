import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const MapButton = ({ addressHabitation }) => {
    const handleClick = () => {
      window.open(`https://www.google.com/maps/search/?api=1&query=habitation+saint+charles+Chemin+de+Grippiere+Petit-Bourg+Guadeloupe`, '_blank');
    };
  
    return (
      <button
        className='text-white border-2 px-6 py-3 my-2 flex items-center max-w-[190px] max-h-[30px]'
        onClick={handleClick}
      >
        {addressHabitation} <HiArrowNarrowRight className='ml-2' />
      </button>
    );
  };

  const MapButton2 = ({ addressEglise }) => {
    const handleClick2 = () => {
      window.open(` https://maps.google.com/?q=Rue+du+Père+Benetreau,+Goyave,+Guadeloupe&ll=16.135493,-61.572781`, '_blank');
    };
  
    return (
      <button
        className='text-white border-2 px-6 py-3 my-2 flex items-center max-w-[190px] max-h-[30px]'
        onClick={handleClick2}
      >
        {addressEglise} <HiArrowNarrowRight className='ml-2' />
      </button>
    );
  };


 


const Infos =() => {
    return (
        <div>
            <div className='pt-20 pb-10 sm:pt-20 px-4 flex flex-col justify-center items-center w-full h-ful border-b-8'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className ='text-[#808080] text-left'>Samedi 3 juin 2023 à 15h</p>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#00739F] border-b-4 border-[#FDB400]'> Mariage </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-2xl font-bold text-[#808080]'>
                        <p>La cérémonie religieuse qui aura lieu à l'église de la ville de Goyave sera suivie d'un dîner à l'habitation Saint-Charles</p>
                    </div>
                <div>
                    <p className='text-[#0085B8]'>Pas de dress code particulier pour le Jour J mais si vous avez du bleu ou une pointe de bleu c'est parfait. Attention l'église n'est pas référencée sur Google, il faut se rendre dans la rue du Père Benetreau.</p>
                    <div className='grid sm:grid-cols-2'>   
                        <MapButton2 addressEglise='Adresse Eglise' />
                        <MapButton addressHabitation='Adresse Soirée' />
                    </div> 
                </div>
                </div>
            </div>
            <div className='pt-10 pb-10 sm:pt-20 px-4 flex flex-col justify-center items-center w-full h-full border-b-8'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className ='text-[#808080] text-left'>Proposition d'activité</p>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#00739F] border-b-4 border-[#FDB400]'> Ensemble </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-2xl font-bold text-[#808080]'>
                        <p>Nous vous proposons de découvrir sur une journée la réserve naturelle sur l'île de Petite terre. Journée organisée à 110 euros par personne (All inclusive)</p>
                    </div>
                <div>
                    <p className='text-[#0085B8]'>Pour aller à Petite terre il faut prendre le bateau. Activité incontournable : plage de sable blanc, lagon et l'occasion d'admirer la faune et la flore caribbéenne sous-marine </p>
                </div>
                </div>
            </div>
            <div className='pt-10 pb-10 sm:pt-20 px-4 flex flex-col justify-center items-center w-full h-full border-b-8'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className ='text-[#808080] text-left'>Pour ceux qui partent avec nous</p>
                        <p className='text-4xl sm:text-7xl font-bold inline text-[#00739F] border-b-4 border-[#FDB400]'> Avion </p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className ='sm:text-right text-2xl font-bold text-[#808080]'>
                        <p>Départ le 1er Juin à 12h20 de Paris (Orly) et arrivée à 15h00 à Pointe-à-Pitre.</p>
                    </div>
                <div>
                    <p className='text-[#0085B8]'>Pensez à vous munir de votre passeport ou carte d'identité (en cours de validité).
                   Il faut être sur place minimum deux heures avant l'embarquement.</p>
                </div>
                </div>
            </div>
        </div>
         );   
}

export default Infos


{/* <div className='pt-20 pb-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full border-b-8'>
<p className ='text-[#D34D2A] text-left'>Pour ceux qui partent avec nous</p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#CEA450]'>Avion</h1>
<h2 className='text-4xl sm:text-5xl font-bold text-[#307C7C]'>Départ le 1er Juin à 12h20 de Paris (Orly) et arrivée à 15h00 à Pointe-à-Pitre.</h2>
<p className='text-[#AE682E] py-4 max-w-[700px]'>Pensez à vous munir de votre passeport ou carte d'identité (en cours de validité).
   Il faut être sur place minimum deux heures avant l'embarquement.</p>
</div> */}