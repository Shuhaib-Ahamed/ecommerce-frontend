import axios from "axios";
import jwt from "jsonwebtoken";

export const AUTH_URL = "http://localhost:8000/api/auth/";
export const USER_URL = "http://localhost:8000/api/users/";
export const PRODUCT_URL = "http://localhost:8000/api/products/";

// AUTH API REGISTER//
export async function register(data) {
  try {
    const response = await axios.post(AUTH_URL + "register", data.body);

    return response;
  } catch (error) {
    console.error(error);
  }
}

// AUTH API LOGIN//
export async function login(data) {
  try {
    const response = await axios.post(AUTH_URL + "login", data.body);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// GET CURRENT USER//
export async function getCurrentUser(data) {
  try {
    const response = await axios.get(USER_URL + `/find/${data.id}`, {
      headers: {
        token: data.token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// GET ALL PRODUCTS//
export async function getAllProducts(data) {
  try {
    const response = await axios.get(PRODUCT_URL, {
      headers: {
        token: data.token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// GET USER SESSION //
export function getUserSession() {
  if (localStorage.getItem("token") !== null) {
    const decodedToken = jwt.decode(localStorage.getItem("token"));
    if (decodedToken === null) {
      return null;
    } else {
      return decodedToken;
    }
  }
}
