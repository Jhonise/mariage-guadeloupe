
import { activities } from "./data.js";

export function getActivity() {
    const listActivities = activities;
    return listActivities;
  }
  
  export function filterActivities(activitiesTag) {
    let filtredActivities = getActivity().filter(type => type.tag === activitiesTag);
    return filtredActivities;
  }
  