import _ from "lodash";
import {
  FETCH_PEOPLE,
  FETCH_CHARACTERS,
  FETCH_PERSON
} from "../actions";

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_PEOPLE:
    let data = []

    action.payload.data.results.forEach(function(item, index){
      if(Object.keys(state).length>0){
        item.id = index+Object.keys(state).length
      }else{
        item.id = 1+index
      }
      data.push(item)
    })

    let newestState;
    if(Object.keys(state).length==0){
      newestState = data
    }else{
      newestState = state.concat(data)
    }

    newestState.count = action.payload.data.count

      if(newestState.length==action.payload.data.count){
        newestState = _.mapKeys(newestState, "id")
      }

      return newestState


    case FETCH_PERSON:
      return _.mapKeys(action.payload.data, "id");

    case FETCH_CHARACTERS:
      return _.mapKeys(action.payload.data, "id");

    default:
      return state;
  }
}
