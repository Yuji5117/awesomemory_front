export const login = (data: { email: string; password: string }) => {
  let isSuccess = false;
  const emailFromLocalStorage = localStorage.getItem("email");
  const passwordFromLocalStorage = localStorage.getItem("password");

  if (data.email !== emailFromLocalStorage) {
    console.error("Email is wrong");
    return isSuccess;
  }
  if (data.password !== passwordFromLocalStorage) {
    console.error("Password is wrong");
    return isSuccess;
  }

  isSuccess = true;

  return data;
};
