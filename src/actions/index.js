import axios from "axios";
import SpeciesAttr from "../data/specie_attrs";

//fetch people/person gets set people from swapi api example: 'Luke Skywalker'
//fetch character gets the info for the create your own characters
export const FETCH_PEOPLE = "fetch_people";
export const FETCH_PERSON = "fetch_person";
export const FETCH_CHARACTERS = "fetch_characters";
export const FETCH_SPECIES = "fetch_species";
export const FETCH_PLANETS = "fetch_planets";
export const FETCH_VEHICLES = "fetch_vehicles";
export const FETCH_STARSHIPS = "fetch_starships";
export const FETCH_WEAPONS = "fetch_weapons";
export const FETCH_OCCUPATIONS = "fetch_occupations";

const ROOT_SWAPI_URL = "https://swapi.co/api";

export function fetchWeapons(){
  console.log('STEP 1')
  return {
    type: FETCH_WEAPONS,
  };
}

export function fetchOccupations(){
  console.log('STEP 1')
  return {
    type: FETCH_OCCUPATIONS,
  };
}

export function fetchStarWarsPeople(page){

  const request = axios.get(`${ROOT_SWAPI_URL}/people/?page=${page}`)
  console.log(request)

  return {
    type: FETCH_PEOPLE,
    // page: 1,
    payload: request,

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

export function fetchAllStarWarsPeople() {
  console.log("Fetching All Star Wars People")
  return (function(dispatch) {
    console.log("fetchAllStarWarsPeople callback");
    Promise.all([
      dispatch(fetchStarWarsPeople(1)),
      dispatch(fetchStarWarsPeople(2)),
      dispatch(fetchStarWarsPeople(3)),
      dispatch(fetchStarWarsPeople(4)),
      dispatch(fetchStarWarsPeople(5)),
      dispatch(fetchStarWarsPeople(6)),
      dispatch(fetchStarWarsPeople(7)),
      dispatch(fetchStarWarsPeople(8)),
      dispatch(fetchStarWarsPeople(9))
    ]).then(function(results){
      console.log("promise completed");
      let data = [];
      results.forEach(function(result){
        data=data.concat(result.payload.data.results);
      });
    });
    })
  }




// TODO: Finish this fetchCharacter function 'test'
export function fetchCharacters() {
  const request = [{
      id: '101',
      species: 'Ewok',
      homePlanet: 'Tatooine',
      vehicle: 'TIE bomber',
      starship: 'Executor',
      occupation: 'Animal trainer',
      gender: 'male',
      eye_color: 'red',
      stats: {
        'STR': 0,
        'DEX': 0,
        'CON': 3,
        'WIS': 4,
        'CHA': 2
      },
    },
    {
      id: '101',
      species: 'Trandoshan',
      homePlanet: 'Alderaan',
      vehicle: 'Sand Crawler',
      starship: 'Death Star',
      occupation: 'Code dealer',
      gender: 'female',
      eye_color: 'blue',
      stats: {
        'STR': 0,
        'DEX': 0,
        'CON': 3,
        'WIS': 4,
        'CHA': 2
      },
    }
  ]
  console.log(request)

  return {
    type: FETCH_CHARACTERS,
    payload: request
  };
}

//action for getting species planet vehicles starships below
export function fetchSpecies() {
  const request = axios.get(`${ROOT_SWAPI_URL}/species/`)
  console.log(request)
  console.log('fetch tick')
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
