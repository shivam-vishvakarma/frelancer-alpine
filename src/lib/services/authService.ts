import { LoginData, LoginResponse, RegisterData } from "../types";

export const getLoginUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("No token found");
    return null;
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/me`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const userLogin = async ({ email, password }: LoginData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (response.status === 404) {
      return { error: "Network Error" };
    }
    const data = await response.json();
    if (data.error) {
      return data;
    }
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      return await getLoginUser();
    }
    return { error: "Something went wrong" };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};

export const userRegister = async (formData: RegisterData) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response?.status === 404) {
      return { error: "Network Error" };
    }
    const data = await response.json();
    if (data.errors) {
      return { error: JSON.stringify(data.errors) };
    }
    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      return await getLoginUser();
    }
    return { error: "Something went wrong" };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};

export const userLogout = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "You are not logedin" };
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/logout`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
      }
    );

    if (response.status === 404) {
      return { error: "Network Error" };
    }
    if (response.status === 200) {
      localStorage.removeItem("token");
      return true;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
