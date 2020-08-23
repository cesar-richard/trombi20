import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Logout() {
  axios({
    url: "http://localhost:3000/logout",
    method: "GET",
    params: { ticket: localStorage.bestyearaccesstoken }
  });
  localStorage.removeItem("bestyearuser");
  return <Redirect to={`${process.env.PUBLIC_URL}/login`} />;
}

Logout.propTypes = {};
