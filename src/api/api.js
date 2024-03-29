import axios from "axios";
import jwt from "jsonwebtoken";

export const AUTH_URL = "http://localhost:8000/api/auth/";
export const USER_URL = "http://localhost:8000/api/users/";
export const PRODUCT_URL = "http://localhost:8000/api/products/";
export const IMAGE_URL = "http://localhost:8000/api/upload/";

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

// GET PRODUCT BY ID//
export async function deleteProductById(data) {
  try {
    const response = await axios.delete(PRODUCT_URL + data.id, {
      headers: {
        token: data.token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// GET PRODUCT BY ID//
export async function getProductById(data) {
  try {
    const response = await axios.get(PRODUCT_URL + `/find/${data.id}`, {
      headers: {
        token: data.token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// EDIT PRODUCT BY ID//
export async function editProductById(data) {
  try {
    const response = await axios.put(PRODUCT_URL + data.id, data.body, {
      headers: {
        token: data.token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// ADD PRODUCT BY ID//
export async function addProduct(data) {
  try {
    const response = await axios.post(PRODUCT_URL, data.body, {
      headers: {
        token: data.token,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// ADD IMAGE//
export async function uploadImage(data) {
  try {
    const response = await axios.post(IMAGE_URL, +"image", data.body, {
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
