import { BASE_URL } from "../../services/httpRequest";
import { header } from "../../services/httpRequest";

export const loginAdmin = async (email) => {
  const res = await fetch(`${BASE_URL}/user/support/login/send-otp`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (data) {
    console.log("data : ", data);
    return data;
  }
};

export const otpVerification = async (email, otp) => {
  const res = await fetch(`${BASE_URL}/user/support/login/validate-otp`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      email,
      otp,
      player_id: "web",
      device_platform: "web",
    }),
  });
  const data = await res.json();
  if (data) {
    console.log("data : ", data);
    return data;
  }
};
