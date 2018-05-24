import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SwapiReducer from "./reducer-people";


const rootReducer = combineReducers({
  people: SwapiReducer // TODO: value should be a reducer that will be called something like PeopleReducer

});

export default rootReducer;
