import styled from "styled-components";

import { Button } from "@/components/Elements/Button";

export const Login = () => {
  return (
    <div>
      <h1>ログイン</h1>
      <LoginForm action="">
        <div>
          <div>
            <label htmlFor="">メール</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">パスワード</label>
            <input type="text" />
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
