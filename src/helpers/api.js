import axios from "axios";
import queryString from "query-string";

export const getAll = ticket =>
  axios({
    url: "https://trombi20-api.vercel.app/",
    method: "GET",
    params: { ticket: localStorage.bestyearaccesstoken }
  });

export const loginCas = async (service, ticket) =>
  await (
    await axios({
      url: "https://trombi20-api.vercel.app/login",
      method: "POST",
      data: queryString.stringify({ ticket, service })
    })
  ).data;
