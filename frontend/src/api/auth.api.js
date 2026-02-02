import api from "./axios";

// export const register = async (data) => {
//   const res = await api.post("/register", data);
  

//   localStorage.setItem("token", res.data.token);
//   localStorage.setItem("user", JSON.stringify(res.data.user));

//   return res.data;
// };
export const register = async (data) => {
  try {
    console.log("Sending request to:", "/register");
    console.log("With data:", data);
    
    const res = await api.post("/register", data);
    console.log("Response:", res);
    
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    
    return res.data;
  } catch (error) {
    console.error("Register error details:", {
      message: error.message,
      response: error.response,
      config: error.config // This shows the URL being called
    });
    throw error;
  }
};


export const login = async (data) => {
  const res = await api.post("/login", data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};

export const logout = async () => {
  await api.post("/logout");

  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getMe = async () => {
  const res = await api.get("/me");
  return res.data;
};
