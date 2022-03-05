import { combineReducers } from "redux";
import timeUpReducer from "./timeUpReducer";
import sideBAuthReducer from "./sideBAuthReducer";

const rootReducer = combineReducers({
  timeUpReducer,
  sideBAuthReducer,
});

export default rootReducer;
