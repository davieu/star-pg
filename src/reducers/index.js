import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ListsReducer from "./reducer-lists";
import OptionsReducer from "./reducer-lists";


const rootReducer = combineReducers({
  people: ListsReducer, // TODO: rename to whatever we rename the reducer-people to
  options: OptionsReducer // TODO: OPTIONS REDUCER because it pulls planet, species, etc... from SWAPI and stripped JSON data that Ilona was able to grab
});

export default rootReducer;
