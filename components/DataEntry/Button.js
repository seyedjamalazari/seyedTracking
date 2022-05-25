import { Button as AntdButton } from "antd";
import { Controller } from "react-hook-form";

const Button = ({ control, label, name, ...props }) => {
  console.log("htmlType", props.htmlType);
  return (
    <>
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <AntdButton {...field} {...props} />}
      />
    </>
  );
};

export default Button;
