import _ from "lodash";
import { FETCH_SPECIES, FETCH_PLANETS, FETCH_VEHICLES, FETCH_STARSHIPS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPECIES:
      console.log('SUCCESS')
      console.log(action.payload.data)
<<<<<<< HEAD
      return action.payload.data;
=======
      console.log(state)
      return [ action.payload.data, ...state ]
>>>>>>> 0ff89c406eb2ae6c5b52daefd55096714e01cace

    case FETCH_PLANETS:
      return action.payload.data;

    case FETCH_VEHICLES:
      return action.payload.data;

    case FETCH_STARSHIPS:
      return action.payload.data;

    default:
      return state;
  }
  return state
}
