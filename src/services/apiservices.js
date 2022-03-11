import { BASE_URL, RequestAPI } from "./httpRequest";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidWlkIjoiNGE0NjdlZWQtMDRhYi00YTk4LTllZjItZDc5OGMwZTdhMTFjIiwicm9sZV9pZCI6Miwicm9sZV9uYW1lIjoiU1VQUE9SVCIsIm9yZ2FuaXphdGlvbl9pZCI6MSwiZGF0ZSI6MTY0NjU1OTA4MjIwMiwiaWF0IjoxNjQ2NTU5MDgyLCJleHAiOjE2NDY3MzE4ODJ9._Fv_4pZFGmntorjYYrMFzhiu_r5PM5csf4cYyGGdS8c";

export function login(obj) {
  return RequestAPI(BASE_URL + "/user/login/send-otp", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function validateOtp(obj) {
  return RequestAPI(BASE_URL + "/user/login/validate-otp", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function getDoctors() {
  return RequestAPI(BASE_URL + "/query/doctors/my-team?page=1&limit=10", {
    method: "GET",
  });
}

export function getNurses() {
  return RequestAPI(BASE_URL + "/query/nurse/my-team?page=1&limit=10", {
    method: "GET",
  });
}

export function addDoctor(obj) {
  return RequestAPI(BASE_URL + "/user/doctor/register", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function addNurse(obj) {
  return RequestAPI(BASE_URL + "/user/nurse/register", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function getSpecialityList() {
  return RequestAPI(BASE_URL + "/static/speciality/list", {
    method: "GET",
  });
}

export function KPISupportDashboard() {
  return RequestAPI(BASE_URL + `/query/kpi-cards/fetch/organization`, {
    method: "GET",
  });
}

export function KPIDoctorDashboard(uid) {
  return RequestAPI(BASE_URL + `/query/kpi-cards/fetch/dashboard?doctor_id=${uid}`, {
    method: "GET",
  });
}

export function GetPatients(uid) {
  return RequestAPI(BASE_URL + `/query/doctors/fetch/my-patients?page=1&limit=1`, {
    method: "GET",
  });
}

export function getAppointmentHistory(uid,from, to) {
  return RequestAPI(BASE_URL + `/query/appointments/fetch/by-date-range?from_date=${from}&to_date=${to}&doctor_id=${uid}`, {
    method: "GET",
  });
}





