import { DevTool } from "@hookform/devtools";

import { Button } from "@/components/Elements/Button";
import { InputField } from "@/components/Elements/Form";
import { Form } from "@/components/Elements/Form/Form";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = (data: { email: string; password: string }) => {
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
