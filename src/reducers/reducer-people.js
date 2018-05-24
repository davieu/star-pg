import _ from "lodash";
import { FETCH_PEOPLE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
    console.log(_.mapKeys(action.payload.data.results, "name"))
      return _.mapKeys(action.payload.data.results, "name");
    default:
      return state;
  }
}
