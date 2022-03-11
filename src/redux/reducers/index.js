import { combineReducers } from "redux";
import timeUpReducer from "./timeUpReducer";
import sideBAuthReducer from "./sideBAuthReducer";
import userDataReducer from "./userDataReducer";

const rootReducer = combineReducers({
  timeUpReducer,
  sideBAuthReducer,
  userDataReducer,
});

export default rootReducer;
