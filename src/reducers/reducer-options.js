import _ from "lodash";

import { FETCH_SPECIES, FETCH_PLANETS, FETCH_VEHICLES, FETCH_STARSHIPS, FETCH_WEAPONS, FETCH_OCCUPATIONS, EMPTY_OPTIONS } from "../actions";
import Weapons from "../data/weapons";
import Occupations from "../data/occupations";

import SpeciesAttr from "../data/specie_attrs";

export default function(state = [], action) {
  let data = [];
  let newestState;
  switch (action.type) {
    case FETCH_SPECIES:
      // console.log('SUCCESS')
      // console.log(action.payload.data);
      if(!action.payload.data){
        return state
      }
      action.payload.data.results.forEach(function(item, index){
        if (Object.keys(state).length > 0) {
          item.id = index +Object.keys(state).length
        } else {
          item.id = 1+index;
        }
        data.push(item);
      });
      if(Object.keys(state).length==0){
        newestState = data;
      } else {
        newestState = state.concat(data)
      }
      // newestState = state.concat(action.payload.data)
      newestState.count = action.payload.data.count;
      if (newestState.length == newestState.count) {
        newestState = _.mapKeys(newestState, "id")
      }
      return newestState;

    case FETCH_PLANETS:
      return action.payload.data;

    case FETCH_VEHICLES:
      return action.payload.data;

    case FETCH_STARSHIPS:
      return action.payload.data;

    case FETCH_WEAPONS:
      return Weapons;

    case FETCH_OCCUPATIONS:
      return Occupations;

    case EMPTY_OPTIONS:
      return [];






    default:
      return state;
  }
  return state
}
