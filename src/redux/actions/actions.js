export const timeUp = (sdr) => {
  return {
    type: "TIMEUP",
    payload: sdr,
  };
};

export const sideBarAuth = (sdr) => {
  return {
    type: "SIDEBARAUTH",
    payload: sdr,
  };
};

export const userData = (sdr) => {
  return {
    type: "USERDATA",
    payload: sdr,
  };
};
