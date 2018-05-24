import axios from "axios";

//fetch people/person gets set people from swapi api example: 'Luke Skywalker'
//fetch character gets the info for the create your own characters
export const FETCH_PEOPLE = "fetch_people";
export const FETCH_PERSON = "fetch_person";
export const FETCH_CHARACTERS = "fetch_characters";


const ROOT_SWAPI_URL = "https://swapi.co/api";

export function fetchStarWarsPeople() {
  const request = axios.get(`${ROOT_SWAPI_URL}/people/`)
  console.log(request)

  return {
    type: FETCH_PEOPLE,
    payload: request
  };
}

export function fetchStarWarsPerson(id) {
  const request = axios.get(`${ROOT_SWAPI_URL}/people/${id}/`)
  console.log(request)

  return {
    type: FETCH_PERSON,
    payload: request
  };
}

// TODO: Finish this fetchCharacter function 'test'
export function fetchCharacters() {
  const request = {text:'test'}
    console.log(request)

  return {
    type: FETCH_CHARACTERS,
    payload: request
  };
}



// TODO: somehow, fetchStarWarsPeople needs to store it's payload in the state. When do we need the Google API to fetch? I don't know what the image data looks like.


// TODO: payload needs to go to Google API to find images
