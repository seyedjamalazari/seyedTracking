import { Input as AntdInput } from "antd";
import { Controller } from "react-hook-form";

const Input = ({ control, label, name, ...props }) => {
  return (
    <>
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <AntdInput {...props} {...field} />}
      />
    </>
  );
};

export default Input;
