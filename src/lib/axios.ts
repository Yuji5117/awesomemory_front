import Axios from "axios";

import { mockAPI } from "@/config";

export const apiClient = Axios.create({
  baseURL: mockAPI,
});
