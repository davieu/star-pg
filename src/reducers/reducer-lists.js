import _ from "lodash";
import { FETCH_PEOPLE, FETCH_CHARACTERS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
    let data =[]
    console.log(action.payload.data.next)
    action.payload.data.results.forEach(function(item, index){
      item.id = 1+index
      data.push(item)
    })
    console.log(data)
      return _.mapKeys(data, "id");
    case FETCH_CHARACTERS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
