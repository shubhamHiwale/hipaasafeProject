const initState = false;

const timeUpReducer = (state = initState, action) => {
  switch (action.type) {
    case "TIMEUP":
      return (state = action.payload);
      break;
    default:
      return state;
  }
};
export default timeUpReducer;
