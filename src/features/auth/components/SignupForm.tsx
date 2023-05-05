import { DevTool } from "@hookform/devtools";

import { signup } from "../api/signup";

import { Button } from "@/components/Elements/Button";
import { InputField } from "@/components/Elements/Form";
import { Form } from "@/components/Elements/Form/Form";

type SignupFormProps = {
  onSuccess: () => void;
};

export const SignupForm = ({ onSuccess }: SignupFormProps) => {
  return (
    <div>
      <Form
        onSubmit={async (values) => {
          await signup(values);
          onSuccess();
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
            <Button styleType="primary">サインアップ</Button>
            <DevTool control={control} />
          </>
        )}
      </Form>
    </div>
  );
};
