import { BASE_URL, header } from "../../httpRequest";

export const addDoctor = async (email) => {
  const res = await fetch(`${BASE_URL}/user/doctor/register`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      name: "Doctor girish mule",
      email: "mule123@gmail.com",
      country_code: "+91",
      number: "9965312011",
      location: "jalna",
      experience: 1.5,
      speciality_id: 1,
      tags: [1, 2],
    }),
  });
  const data = await res.json();
  if (data) {
    console.log("data : ", data);
    return data;
  }
};
