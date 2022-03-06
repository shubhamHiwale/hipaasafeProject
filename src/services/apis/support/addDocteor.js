import { BASE_URL, header } from "../../httpRequest";

export const addDoctor = async (
  name,
  email,
  city,
  mobile,
  speciality,
  year_of_exp
) => {
  const res = await fetch(`${BASE_URL}/user/doctor/register`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      name,
      email,
      country_code: "+91",
      number: mobile,
      location: city,
      experience: year_of_exp,
      speciality_id: speciality,
      tags: [1, 2, 3],
    }),
  });
  const data = await res.json();
  if (data) {
    console.log("data : ", data);
    return data;
  }
};
