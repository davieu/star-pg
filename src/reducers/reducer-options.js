import _ from "lodash";
import { FETCH_SPECIES, FETCH_PLANETS, FETCH_VEHICLES, FETCH_STARSHIPS, FETCH_WEAPONS } from "../actions";

import SpeciesAttr from "../data/specie_attrs";

export default function(state = [], action) {
  let data = [];
  let newestState;
  switch (action.type) {
    case FETCH_STARSHIPS:
    case FETCH_VEHICLES:
    case FETCH_PLANETS:
    case FETCH_SPECIES:
      console.log('SUCCESS')
      console.log(action.payload.data);
      if(!action.payload.data){
        return
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
      console.log("newestState:")
      console.log (newestState);
      return newestState;

    case FETCH_WEAPONS:
      console.log(state)
      console.log('STEP 2')
      console.log(SpeciesAttr)
      return SpeciesAttr;

    default:
      return state;
  }
  return state
}
