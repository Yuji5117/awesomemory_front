import { apiClient } from "@/lib/axios";

type loginArgs = {
  email: string;
  password: string;
};

export const login = async (values: loginArgs) => {
  const res = await apiClient.post("/auth/login", values);
  if (res?.status === 200) {
    return res;
  }
  return false;
};
