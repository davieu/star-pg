import _ from "lodash";
import { FETCH_SPECIES, FETCH_PLANETS, FETCH_VEHICLES, FETCH_STARSHIPS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SPECIES:
      console.log('SUCCESS')
      console.log(action.payload.data)
      return action.payload.data;

    case FETCH_PLANETS:
      return action.payload.data;

    case FETCH_VEHICLES:
      return action.payload.data;

    case FETCH_STARSHIPS:
      return action.payload.data;

    default:
      return state;
  }
}
