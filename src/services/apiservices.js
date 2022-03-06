import { BASE_URL, RequestAPI } from "./httpRequest";

export function login(obj) {
    return RequestAPI(BASE_URL + "/user/support/login/send-otp", {
        method: "POST",
        body: JSON.stringify(obj),
    });
}

export function validateOtp(obj) {
    return RequestAPI(BASE_URL + "/user/support/login/validate-otp", {
        method: "POST",
        body: JSON.stringify(obj),
    });
}

