import { useNavigate } from "react-router-dom";

import { Layout } from "@/features/auth/components/Layout";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <LoginForm onSuccess={() => navigate("/")} />
    </Layout>
  );
};
