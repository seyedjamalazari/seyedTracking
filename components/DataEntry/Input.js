import { Input as AntdInput } from "antd";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Input = ({ errors = {}, register, control, label, name, ...props }) => {
  return (
    <>
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <AntdInput {...props} {...field} />}
        register={register}
      />
      <ErrorMessage errors={errors} name={name} as="p" />
    </>
  );
};

export default Input;
