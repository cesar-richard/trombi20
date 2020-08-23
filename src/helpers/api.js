import axios from "axios";
import queryString from "query-string";

const baseUrl = true
  ? "https://trombi20-api.vercel.app"
  : "http://localhost:3000";

export const getAll = ticket =>
  axios({
    url: `${baseUrl}/`,
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("bestyearuser")).jwt
      }`
    },
    method: "GET",
    params: { ticket: localStorage.bestyearaccesstoken }
  });

export const loginCas = async (service, ticket) =>
  await (
    await axios({
      url: `${baseUrl}/login`,
      method: "POST",
      data: queryString.stringify({ ticket, service })
    })
  ).data;
