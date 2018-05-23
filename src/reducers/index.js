import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";


const rootReducer = combineReducers({
  people: [] // TODO: value should be a reducer that will be called something like PeopleReducer

});

export default rootReducer;
