//todo registration api
const api = import.meta.env.VITE_URL;
const contentdata = { "Content-Type": "application/json" };

export const RegistrationApies = async (formData) => {
  try {
    const response = await fetch(`${api}/api/v1/user/Registration`, {
      method: "POST",
      headers: contentdata,
      credentials: "include",
      body: JSON.stringify(formData),
    });
    return response;
  } catch (err) {
    throw new Error("registraiton api error ", err);
  }
};

//!  login api--------

export const LoginApi = async (formData) => {
  try {
    const response = await fetch(`${api}/api/v1/user/login`, {
      method: "POST",
      headers: contentdata,
      credentials: "include",
      body: JSON.stringify(formData),
    });

    return response;
  } catch (err) {
    throw new Error("Login Error ", err);
  }
};

//? donar api---

export const DonarApi = async (formData) => {
  try {
    const response = await fetch(`${api}/api/v1/donar/DonarList`, {
      method: "POST",
      headers: contentdata,
      credentials: "include",
      body: JSON.stringify(formData),
    });

    return response;
  } catch (err) {
    throw new Error("Donar Error", err);
  }
};

//? getcamp Api---

export const CampDataapi = async () => {
  try {
    const Response = await fetch(`${api}/api/v1/camp/CampDetails`, {
      method: "GET",
      headers: contentdata,
      credentials: "include",
    });
    return Response;
  } catch (err) {
    throw new Error("camp Fatching Error ", err);
  }
};

//? blood requestapi

export const BloodRequestapi = async (formData) => {
  try {
    const responsed = await fetch(`${api}/api/v1/request/bloodRequest`, {
      method: "POST",
      headers: contentdata,
      credentials: "include",
      body: JSON.stringify(formData),
    });

    return responsed;
  } catch (err) {
    throw new Error("Blood request error ", err);
  }
};

//! delete Your Account

export const deleteAccount = async (FormData) => {
  try {
    const response = await fetch(`${api}/api/v1/user/Account-delete`, {
      method: "DELETE",
      headers: contentdata,
      credentials: "include",
      body: JSON.stringify(FormData),
    });

    return response;
  } catch (err) {
    throw new Error("Account Delete Error ", err);
  }
};

//todo Logout

export const LogoutUser = async () => {
  try {
    const response = await fetch(`${api}/api/v1/user/logout`, {
      method: "POST",
      headers: contentdata,
      credentials: "include",
    });

    return response;
  } catch (err) {
    throw new Error("Logout Error", err);
  }
};

//? refresh token

export const RefreshToken = async () => {
  try {
    const response = fetch(`${api}/api/v1/user/refreshToken`, {
      method: "POST",
      headers: contentdata,
      credentials: "include",
    });
    return response;
  } catch (err) {
    throw new Error("Refresh Token Error ", err);
  }
};
