import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "@/components/Elements/Button";
import { Heading } from "@/components/Elements/Heading";
import { InputField } from "@/components/Form";
import { Form } from "@/components/Form/Form";
import { mockAPI } from "@/config";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = async (valus: any) => {
    const res = await axios.post(`${mockAPI}/login`);
    console.log({ res });
    console.log({ valus });
    return true;
  };
  return (
    <LoginFormWrapper>
      <Heading headingLevel="h1">Log in</Heading>
      <Form
        onSubmit={async (values) => {
          const isSuccess = await login(values);
          if (isSuccess) {
            onSuccess();
          }
        }}
      >
        {({ register, control }) => (
          <>
            <InputContainer>
              <InputField
                label="メールアドレス"
                type="email"
                regitration={register("email", { required: true })}
              />
            </InputContainer>
            <InputContainer>
              <InputField
                label="パスワード"
                type="password"
                regitration={register("password", { required: true })}
              />
            </InputContainer>
            <ButtonContainer>
              <Button styleType="primary">ログイン</Button>
            </ButtonContainer>
            <DevTool control={control} />
          </>
        )}
      </Form>
      <div>
        <Link to="/signup/">Sign upへ</Link>
      </div>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
`;
