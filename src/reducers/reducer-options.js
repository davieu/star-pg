import _ from "lodash";
import { FETCH_SPECIES, FETCH_PLANETS, FETCH_VEHICLES, FETCH_STARSHIPS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SPECIES:
      return _.mapKeys(action.payload.data, "id");

    case FETCH_PLANETS:
      return _.mapKeys(action.payload.data, "id");

    case FETCH_VEHICLES:
      return _.mapKeys(action.payload.data, "id");

    case FETCH_STARSHIPS:
      return _.mapKeys(action.payload.data, "id");

    default:
      return state;
  }
}
