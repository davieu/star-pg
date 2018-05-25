import _ from "lodash";
import { FETCH_PEOPLE, FETCH_CHARACTERS, FETCH_PERSON } from "../actions";

export default function(state = {}, action) {
  console.log(action)
  console.log(action.type)
  switch (action.type) {
    case FETCH_PEOPLE:

    let data = []
    console.log(Object.keys(state).length)
    console.log(state)
    console.log('XXXXXXX')
    console.log(action)
    console.log(action.payload)
    console.log(action.payload.data)
    action.payload.data.results.forEach(function(item, index){
      if(Object.keys(state).length>0){
        item.id = index+Object.keys(state).length
      }else{
        item.id = 1+index
      }
      data.push(item)
    })
    console.log('DATA')
    console.log(data)
    let newData = _.mapKeys(data, "id")

    let newState = Object.assign({}, state, newData)
    console.log(Object.keys(state).length==0)
    let newestState = data.concat(Object.keys(state).length==0 ? {count: action.payload.data.count}: state)

    newState.count = action.payload.data.count
    console.log(newState)
    console.log(newestState)
    // console.log(newData)


      return newestState




    case FETCH_PERSON:
      return _.mapKeys(action.payload.data, "id");

    case FETCH_CHARACTERS:
      return _.mapKeys(action.payload.data, "id");

    default:
      return state;
  }
}
