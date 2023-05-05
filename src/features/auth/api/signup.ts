export const signup = (data: { email: string; password: string }) => {
  localStorage.setItem("email", data.email);
  localStorage.setItem("password", data.password);

  return data;
};
