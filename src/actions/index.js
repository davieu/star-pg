import axios from "axios";
import SpeciesAttr from "../data/specie_attrs";

//fetch people/person gets set people from swapi api example: 'Luke Skywalker'
//fetch character gets the info for the create your own characters
export const FETCH_PEOPLE = "fetch_people";
export const FETCH_PERSON = "fetch_person";
export const SUBMIT_CHARACTER = "submit_character";
export const FETCH_CHARACTERS = "fetch_characters";
export const SAVE_CHARACTER = "save_character";

export const FETCH_SPECIES = "fetch_species";
export const FETCH_PLANETS = "fetch_planets";
export const FETCH_VEHICLES = "fetch_vehicles";
export const FETCH_STARSHIPS = "fetch_starships";
export const FETCH_WEAPONS = "fetch_weapons";
export const FETCH_OCCUPATIONS = "fetch_occupations";
export const EMPTY_OPTIONS = "empty_options";


const ROOT_SWAPI_URL = "https://swapi.co/api";
const CHARACTERS_ID = 'star-pgCharacters';

export function fetchWeapons() {

  return {
    type: FETCH_WEAPONS,
  };
}


export function fetchOccupations(){

  return {
    type: FETCH_OCCUPATIONS,
  };
}

export function fetchStarWarsPeople(page){

  const request = axios.get(`${ROOT_SWAPI_URL}/people/?page=${page}`)


  return {
    type: FETCH_PEOPLE,
    payload: request,

  };
}

export function fetchAllStarWarsPeople() {
  return (function(dispatch) {
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
    ]).then(function(results) {
      let data = [];
      results.forEach(function(result) {
        data = data.concat(result.payload.data.results);
      });
    });
  })
}

export function fetchStarWarsPerson(id) {
  const request = axios.get(`${ROOT_SWAPI_URL}/people/${id}/`)


  return {
    type: FETCH_PERSON,
    payload: request
  };
}




// TODO: Finish this fetchCharacter function 'test'
// export function fetchCharacters() {
//   const request = [{
//       id: '101',
//       species: 'Ewok',
//       homePlanet: 'Tatooine',
//       vehicle: 'TIE bomber',
//       starship: 'Executor',
//       occupation: 'Animal trainer',
//       gender: 'male',
//       eye_color: 'red',
//       stats: {
//         'STR': 0,
//         'DEX': 0,
//         'CON': 3,
//         'WIS': 4,
//         'CHA': 2
//       },
//     },
//     {
//       id: '101',
//       species: 'Trandoshan',
//       homePlanet: 'Alderaan',
//       vehicle: 'Sand Crawler',
//       starship: 'Death Star',
//       occupation: 'Code dealer',
//       gender: 'female',
//       eye_color: 'blue',
//       stats: {
//         'STR': 0,
//         'DEX': 0,
//         'CON': 3,
//         'WIS': 4,
//         'CHA': 2
//       },
//     }
//   ]

//
//   return {
//     type: FETCH_CHARACTERS,
//     payload: request
//   };
// }

//action for getting species planet vehicles starships below
export function fetchSpecies(page) {
  const request = axios.get(`${ROOT_SWAPI_URL}/species/?page=${page}`);
  return {
    type: FETCH_SPECIES,
    payload: request
  };
}

export function fetchAllSpecies() {
  return (function(dispatch) {
    Promise.all([
      dispatch(fetchSpecies(1)),
      dispatch(fetchSpecies(2)),
      dispatch(fetchSpecies(3)),
      dispatch(fetchSpecies(4))
    ]).then(function(results) {
        let data = [];
        results.forEach(function(result) {
          data = data.concat(result.payload.results);
        });
      })
    })
  }

  export function fetchPlanets(page) {
    const request = axios.get(`${ROOT_SWAPI_URL}/planets/?page=${page}`)


    return {
      type: FETCH_PLANETS,
      payload: request
    };
  }

  export function fetchAllPlanets() {
    return (function(dispatch){
      Promise.all([
        dispatch(fetchPlanets(1)),
        dispatch(fetchPlanets(2)),
        dispatch(fetchPlanets(3)),
        dispatch(fetchPlanets(4)),
        dispatch(fetchPlanets(5)),
        dispatch(fetchPlanets(6)),
        dispatch(fetchPlanets(7))
      ]).then(function(result){

      })
    })
  }

  export function fetchVehicles(page) {
    const request = axios.get(`${ROOT_SWAPI_URL}/vehicles/?page=${page}`)


    return {
      type: FETCH_VEHICLES,
      payload: request
    };
  }

  export function fetchAllVehicles() {
    return (function(dispatch){
      Promise.all([
      dispatch(fetchVehicles(1)),
      dispatch(fetchVehicles(2)),
      dispatch(fetchVehicles(3)),
      dispatch(fetchVehicles(4))
    ]).then(function(results){});
    }

    )
  }

  export function fetchStarships(page) {
    const request = axios.get(`${ROOT_SWAPI_URL}/starships/?page=${page}`)



    return {
      type: FETCH_STARSHIPS,
      payload: request
    };
  }


  export function emptyOptions() {
    return{
      type: EMPTY_OPTIONS
    }
  }

  export function fetchAllStarships() {
    return (function(dispatch){
      Promise.all([
      dispatch(fetchStarships(1)),
      dispatch(fetchStarships(2)),
      dispatch(fetchStarships(3)),
      dispatch(fetchStarships(4))
    ]).then(function(results){});
    }

    )
  }



  export function submitCharacter(data) {
    return{
      payload: data,
      type: SUBMIT_CHARACTER
    }
  }



export function  saveCharacter(data) {
  localStorage.setItem(CHARACTERS_ID, JSON.stringify(data));
  return {
    type: SAVE_CHARACTER
  }
}

export function  fetchCharacters() {
  let characters = JSON.parse(localStorage.getItem(CHARACTERS_ID) || '[]')
  return {
    type: FETCH_CHARACTERS,
    payload: characters
  }

}
