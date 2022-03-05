import { BASE_URL } from "../../services/httpRequest";
import { header } from "../../services/httpRequest";

export const loginAdmin = (email) => {
  const res = await fetch(`${BASE_URL}/user/support/login/send-otp`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (data) {
    console.log("data : ", data);
  }
};
