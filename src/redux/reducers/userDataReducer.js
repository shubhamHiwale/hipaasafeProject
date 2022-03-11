const initState = "";

const userDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "USERDATA":
      return (state = action.payload);
      break;
    default:
      return state;
  }
};
export default userDataReducer;
