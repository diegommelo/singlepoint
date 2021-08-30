const API_URL = "http://localhost:5000";

import axios from "axios";

export const register = async (user) => {
  try {
    let response = await axios.post(`${API_URL}/users`, user);
    return response;
  } catch (e) {
    console.error(e);
  }
};
