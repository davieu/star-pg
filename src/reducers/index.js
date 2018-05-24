import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SwapiReducer from "./reducer-people";


const rootReducer = combineReducers({
  people: SwapiReducer, // TODO: rename to whatever we rename the reducer-people to
  options: [] // TODO: OPTIONS REDUCER because it pulls planet, species, etc... from SWAPI and stripped JSON data that Ilona was able to grab
});

export default rootReducer;
