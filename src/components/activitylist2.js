import React, { useState } from 'react';
import Carousel from 'better-react-carousel';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import {activities} from './data.js';
  

export default function ActivityList2() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategoryChange = (category) => {
      console.log(category);
      setSelectedCategory(category);
      }
    const activitiesToRender = activities
  .filter(activity => selectedCategory === null || activity.categories.includes(selectedCategory));
    
  const lightboxImages = activitiesToRender.map(activity => ({src: activity.link, title : activity.alt, description : activity.infos}));
      
  const categories = [...new Set(activities.flatMap(a => a.categories))];

  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <div className ='mb-16 text-center pt-16'>
      <div class="sm:hidden mx-6">
        <select id="tabs" className="bg-[#2D7B7B] border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(event) => handleCategoryChange(event.target.value)}>
        {categories.map(category => (
          <option
          value={category}
          style={{ background: category === selectedCategory ? '#F3CB7C' : '' }}
        >
          {category}
        </option>
  ))}
        </select>
    </div>
      <div className ='py-4 px-6 border-b gap-20'>
        {categories.map(category => (
          <button className='hidden sm:inline-flex'
            onClick={() => handleCategoryChange(category)}
            style={{ background: category === selectedCategory ? '#F3CB7C' : '' }}
          >
            {category}
          </button>
        ))}
      </div >
      <Carousel cols={3} rows={1} gap={20}>
        {activitiesToRender.map((activity,index) => (
                    <Carousel.Item>
                    <div className="sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 bg-white">
                      <div className="rounded overflow-hidden shadow-lg">
                        <div className='relative'>
                          <img className='w-full' onClick={() => {setOpen(true); setCurrentImage(index)}} src={activity.link} alt="" />
                        </div>
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{activity.nom}
                              <p className="text-gray-700 text-base pb-4">{activity.infos}</p>
                              <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={activity.lien} target="_blank">Plus d'infos</a>
                            </div>
                          </div>
                      </div>
                    </div>
                    </Carousel.Item>
        ))}
      </Carousel>
      {open && (
      <Lightbox
      open={open}
      slides={lightboxImages}
      plugins={[Captions]}
      Captions= {{descriptionMaxLines:1}}
      currentIndex={currentImage}
      close={() => setOpen(false)}
      onCurrentIndexChange={(index) => setCurrentImage(index)}
      /> 
      )} 
    </div>
    );
}
