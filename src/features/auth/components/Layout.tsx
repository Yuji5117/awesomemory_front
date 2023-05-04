import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Button } from "@/components/Elements/Button";
import { InputField } from "@/components/Elements/Form";

export const Layout = () => {
  const { register } = useForm();
  return (
    <div>
      <h1>ログイン</h1>
      <LoginForm action="">
        <div>
          <div>
            <InputField
              label="メールアドレス"
              type="email"
              regitration={register("email")}
            />
          </div>
          <div>
            <InputField
              label="パスワード"
              type="password"
              regitration={register("password")}
            />
          </div>
          <Button styleType="primary">ログイン</Button>
        </div>
      </LoginForm>
    </div>
  );
};

const LoginForm = styled.form`
  display: flex;
`;
