import axios from "axios";

//fetch people/person gets set people from swapi api example: 'Luke Skywalker'
//fetch character gets the info for the create your own characters
export const FETCH_PEOPLE = "fetch_people";
export const FETCH_PERSON = "fetch_person";
export const FETCH_CHARACTERS = "fetch_characters";
export const FETCH_SPECIES = "fetch_species";
export const FETCH_PLANETS = "fetch_planets";
export const FETCH_VEHICLES = "fetch_vehicles";
export const FETCH_STARSHIPS = "fetch_starships";

const ROOT_SWAPI_URL = "https://swapi.co/api";

export function fetchStarWarsPeople(page) {
  const request = axios.get(`${ROOT_SWAPI_URL}/people/?page=${page}`)
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

//action for species planet vehicles starships

export function fetchSpecies() {
  const request = axios.get(`${ROOT_SWAPI_URL}/starships/`)
  console.log(request)

  return {
    type: FETCH_SPECIES,
    payload: request
  };
}

export function fetchPlanets() {
  const request = axios.get(`${ROOT_SWAPI_URL}/planets/`)
  console.log(request)

  return {
    type: FETCH_PLANETS,
    payload: request
  };
}

export function fetchVehicles() {
  const request = axios.get(`${ROOT_SWAPI_URL}/vehicles/`)
  console.log(request)

  return {
    type: FETCH_VEHICLES,
    payload: request
  };
}

export function fetchStarships() {
  const request = axios.get(`${ROOT_SWAPI_URL}/starships/`)
  console.log(request)

  return {
    type: FETCH_STARSHIPS,
    payload: request
  };
}


// TODO: somehow, fetchStarWarsPeople needs to store it's payload in the state. When do we need the Google API to fetch? I don't know what the image data looks like.


// TODO: payload needs to go to Google API to find images
