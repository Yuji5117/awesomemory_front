import { DevTool } from "@hookform/devtools";

import { login } from "../api/login";

import { Button } from "@/components/Elements/Button";
import { InputField } from "@/components/Form";
import { Form } from "@/components/Form/Form";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  return (
    <div>
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
            <InputField
              label="メールアドレス"
              type="email"
              regitration={register("email", { required: true })}
            />
            <InputField
              label="パスワード"
              type="password"
              regitration={register("password", { required: true })}
            />
            <Button styleType="primary">ログイン</Button>
            <DevTool control={control} />
          </>
        )}
      </Form>
    </div>
  );
};
