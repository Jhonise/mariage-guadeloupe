<div class="px-4 bg-cover bg-[url('https://images.unsplash.com/photo-1525959526508-a37b4add7e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] ">
 <div className="py-14">
     <h1 class='style font-bold '>Informations sur le déroulé</h1>
 </div>
    <img className="w-[34rem] h-[30rem] object-cover rounded-lg-extralarge rounded-tr-extralarge"/>
 <div class="grid grid-cols-2">
    <div>
         <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" className="top-0 w-[22rem] h-[10rem] rounded-tl-[50px] "/>
         <p class="text-center  bg-gray-200/[.06] border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-white/[.3] dark:hover:bg-white/[.5]"> Départ de Paris à 12h20 <br /> vol Numéro XXX de Air France</p>
     </div>
     <div class="max-w-sm w-full lg:max-w-full lg:flex">
         <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('../images/beach2.jpg')">
         </div>
         <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
             <div class="mb-8">
             <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                 <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
             </div>
         </div>
         </div>
 </div>
 <div class="py-4 grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
     <div class="border-x-4 bg-white" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
         <div className="border-2 rounded-lg p-6 flex flex-col items-center">
             <FaPlaneArrival className='icon'/>
            <p className='text-center'>Départ de Paris : 12h20 Arrivée à Pointe-à-Pitre : 15h20 <br />
            Vol Air France NXXX</p>
        </div> 
     </div>
     <div class="border-x-4" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
         <GiPositionMarker class='icon'/>
         <p className='text-center'>Lieu de résidence : domaine de l'habitation Saint-Charles</p>
     </div>
     <div class="border-x-4" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
         <GiBigDiamondRing class='icon'/>
         <p className='text-center'>Le mariage se tiendra le 3 juin à l'habitation Saint-charles</p>
    </div>
    <div class="border-x-4" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <FaChurch class='icon'/>
        <p className='text-center'>Cérémonie religieuse à l'église de la ville de Goyave</p>
    </div>
</div>
</div>