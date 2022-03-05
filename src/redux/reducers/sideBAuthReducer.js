const initState = false;

const sideBAuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIDEBARAUTH":
      return (state = action.payload);
      break;
    default:
      return state;
  }
};
export default sideBAuthReducer;
