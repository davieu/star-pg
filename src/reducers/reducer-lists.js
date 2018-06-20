import _ from "lodash";
import {
  FETCH_PEOPLE,
  FETCH_CHARACTERS,
  FETCH_PERSON,
  SUBMIT_CHARACTER
} from "../actions";

const CHARACTERS_ID = 'star-pgCharacters';

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_PEOPLE:
      let data = []
      console.log(action.payload.data.results)

      action.payload.data.results.forEach(function(item, index) {
        if (Object.keys(state).length > 0) {
          item.id = index + Object.keys(state).length
        } else {
          item.id = 1 + index
        }
        data.push(item)
      })

      let newestState;
      if (Object.keys(state).length == 0) {
        newestState = data
      } else {
        newestState = state.concat(data)
      }

      newestState.count = action.payload.data.count

      if (newestState.length == action.payload.data.count) {
        newestState = _.mapKeys(newestState, "id")
      }

      return newestState

    case FETCH_PERSON:
      return _.mapKeys(action.payload.data, "id");

    case FETCH_CHARACTERS:
    console.log(action.payload)
      return _.mapKeys(action.payload, "name");

    case SUBMIT_CHARACTER:
      let characters = [action.payload, ...JSON.parse(localStorage.getItem(CHARACTERS_ID) || '[]')]
      localStorage.setItem(CHARACTERS_ID, JSON.stringify(characters))
      return [action.payload, ...state]

    default:
      return state;
  }
}
