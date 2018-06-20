import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ListsReducer from "./reducer-lists";
import OptionsReducer from "./reducer-options";
import SpeciesAttr from "../data/specie_attrs";
import Weapons from "../data/weapons";


const rootReducer = combineReducers({
  people: ListsReducer,
  options: OptionsReducer,
  current_person: {}
});

export default rootReducer;
