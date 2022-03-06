export const BASE_URL = "http://3.144.85.173:3500";

export const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
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