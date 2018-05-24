import _ from "lodash";
import { FETCH_PEOPLE, FETCH_CHARACTERS, FETCH PERSON } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
    console.log(_.mapKeys(action.payload.data.results, "name"))
      return _.mapKeys(action.payload.data.results, "name");
    case FETCH_PERSON:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_CHARACTERS:
      return _.mapKeys(action.payload.data, "id");

    default:
      return state;
  }
}
