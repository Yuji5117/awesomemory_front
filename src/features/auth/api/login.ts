import { apiClient } from "@/lib/axios";

export const login = async () => {
  const res = await apiClient.post("/login");
  if (res.status !== 200) {
    return false;
  }
  return true;
};
