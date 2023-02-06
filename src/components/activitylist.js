import React, { useEffect, useState } from 'react';
import {buttons} from './data.js';
import { getActivity, filterActivities } from "./filter.js";

export default function ActivityList() {
    const [filteredActivities, setFilterActivities] = useState(null);
    useEffect(() => {
        setFilterActivities(getActivity());
    }, []);

    function handleActivities(i) {
        let typeActivity = i.target.value;
        typeActivity !== "all"
            ? setFilterActivities(filterActivities(typeActivity))
            : setFilterActivities(getActivity());
        console.log(typeActivity)
    }

    return(
        <>
        {buttons &&
          buttons.map((type, index) => (
            <>
              <button key={index} value={type.value} onClick={handleActivities}>
                {type.name}
              </button>
            </>
          ))}
  
        {filteredActivities &&
          filteredActivities.map(type => (
            <ul key={type.id}>
              <li>{type.nom}</li>
            </ul>
          ))}
      </>
    )
}



        
/* <div>
<div className='grid grid-rows-none md:grid-cols-3 py-8 gap-2 md:gap-4 lg:grid-cols-3'>
    {activityArray}
</div>
<div className="container">
        <Activity 
        key={i} 
        id={activities[i].id} 
        nom={activities[i].nom} 
        alt={activities[i].alt}/>
</div>
</div> */