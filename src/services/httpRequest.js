export const BASE_URL = "http://3.144.85.173:3500";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidWlkIjoiNGE0NjdlZWQtMDRhYi00YTk4LTllZjItZDc5OGMwZTdhMTFjIiwicm9sZV9pZCI6Miwicm9sZV9uYW1lIjoiU1VQUE9SVCIsIm9yZ2FuaXphdGlvbl9pZCI6MSwiZGF0ZSI6MTY0NjU1OTA4MjIwMiwiaWF0IjoxNjQ2NTU5MDgyLCJleHAiOjE2NDY3MzE4ODJ9._Fv_4pZFGmntorjYYrMFzhiu_r5PM5csf4cYyGGdS8c";
export const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token,
};

export const RequestAPI = (url, options) => {
  const headers = new Headers();
  if (!(options.body instanceof FormData)) {
    headers.append("Content-Type", "application/json");
  }
  if (sessionStorage.getItem("access_token")) {
    headers.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("access_token")
    );
    if (options.body instanceof FormData) {
      options.body.append(
        "Authorization",
        "Bearer " + sessionStorage.getItem("access_token")
      );
    }
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return Promise.resolve(json);
    })
  );
};
