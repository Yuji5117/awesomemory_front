import { useNavigate } from "react-router-dom";

import { Layout } from "@/features/auth/components/Layout";
import { SignupForm } from "@/features/auth/components/SignupForm";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <Layout title='サインアップ'>
      <SignupForm onSuccess={() => navigate("/")} />
    </Layout>
  );
};
