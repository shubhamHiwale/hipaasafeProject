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

export function updateDoctor(obj) {
  return RequestAPI(BASE_URL + "/user/doctor/update-profile", {
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

export function updateNurse(obj) {
  return RequestAPI(BASE_URL + "/user/nurse/update-profile", {
    method: "PUT",
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
  return RequestAPI(
    BASE_URL + `/query/kpi-cards/fetch/dashboard?doctor_id=${uid}`,
    {
      method: "GET",
    }
  );
}

export function GetPatients(uid) {
  return RequestAPI(
    BASE_URL + `/query/doctors/fetch/my-patients?page=1&limit=1`,
    {
      method: "GET",
    }
  );
}

export function getAppointmentHistory(uid, from, to) {
  return RequestAPI(
    BASE_URL +
      `/query/appointments/fetch/by-date-range?from_date=${from}&to_date=${to}&doctor_id=${uid}`,
    {
      method: "GET",
    }
  );
}

export function getAppointsByDateRange(uid, date) {
  return RequestAPI(
    BASE_URL +
      `/query/appointments/fetch/by-date?page=1&limit=10&date=${date}&doctor_id=${uid}`,
    {
      method: "GET",
    }
  );
}

export function getScheduleKpi(uid, date, page = 1, limit = 10) {
  console.log(date, "date");
  return RequestAPI(
    BASE_URL + `/query/kpi-cards/fetch/schedule?doctor_id=${uid}&date=${date}`,
    {
      method: "GET",
    }
  );
}

export function addAppo(obj) {
  return RequestAPI(BASE_URL + "/appointment/doctor-nurse/book", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function getProfileById(uid) {
  return RequestAPI(BASE_URL + `/user/profile/by-id?user_id=${uid}`, {
    method: "GET",
  });
}

export function hospitalRepoList() {
  return RequestAPI(BASE_URL + `/static/hospital-reports/list`, {
    method: "GET",
  });
}

export function modifyPatientStatus(obj) {
  console.log("obj : ", obj);
  return RequestAPI(BASE_URL + `appointment/patient/modify`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
}
export function modifyAppo(obj) {
  return RequestAPI(BASE_URL + "/appointment/doctor-nurse/update", {
    method: "PUT",
    body: JSON.stringify(obj),
  });
}

export function getTestReport(u_id, p_id) {
  return RequestAPI(
    BASE_URL + `/documents/user/test-reports/fetch?doctor_id=${u_id}&patient_id=${p_id}`,
   
    {
      method: "GET",
    }
  );
}

export function sendTestRequest(obj) {
  return RequestAPI(BASE_URL + "/documents/request-from-patient", {
    method: "POST",
    body: JSON.stringify(obj),
  });
}

export function removeReq(obj) {
  return RequestAPI(BASE_URL + "/documents/remove-request-from-patient", {
    method: "DELETE",
    body: JSON.stringify(obj),
  });
}


export function weekCountAPI(uid) {
  return RequestAPI(BASE_URL +  `/query/appointments/fetch/week-count?doctor_id=${uid}`, {
    method: "GET"
  });
}
