import _ from "lodash";
import { FETCH_SPECIES, FETCH_PLANETS, FETCH_VEHICLES, FETCH_STARSHIPS, FETCH_WEAPONS } from "../actions";

import SpeciesAttr from "../data/specie_attrs";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPECIES:
      console.log('SUCCESS')
      console.log(action.payload.data)

      return action.payload.data;


    case FETCH_PLANETS:
      return action.payload.data;

    case FETCH_VEHICLES:
      console.log(state)
      console.log(action.payload.data)
      return action.payload.data;

    case FETCH_STARSHIPS:
      return action.payload.data;

    case FETCH_WEAPONS:
      console.log(state)
      console.log('STEP 2')
      console.log(SpeciesAttr)
      return SpeciesAttr

    default:
      return state;
  }
  return state
}
