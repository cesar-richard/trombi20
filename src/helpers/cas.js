import queryString from "query-string";
import axios from "axios";

export const getTicketGrantingTicket = async (
  casUrl,
  username,
  password,
  service
) =>
  await (
    await axios({
      url: `https://cors-anywhere.herokuapp.com/${casUrl}/v1/tickets/`,
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      data: queryString.stringify({ username, password, service })
    })
  ).data;

export const getServiceTicket = async (casUrl, ticketGrantingTicket, service) =>
  await (
    await axios({
      url: `https://cors-anywhere.herokuapp.com/${casUrl}/v1/tickets/${ticketGrantingTicket}`,

      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      data: queryString.stringify({ service })
    })
  ).data;
