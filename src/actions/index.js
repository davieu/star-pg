import axios from "axios";

export const FETCH_PEOPLE = "fetch_people";

// TODO: get root url
const ROOT_SWAPI_URL = "https://swapi.co/api";

export function fetchStarWarsPeople() {
  const request = axios.get(`${ROOT_SWAPI_URL}/people/`)
  console.log(request)

  return {
    type: FETCH_PEOPLE,
    payload: request
  };
}

// TODO: somehow, fetchStarWarsPeople needs to store it's payload in the state. When do we need the Google API to fetch? I don't know what the image data looks like.


// TODO: payload needs to go to Google API to find images