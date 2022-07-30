import React from "react";
import { useForm } from "react-hook-form";
import Button from "../DataEntry/Button";
import Input from "../DataEntry/Input";
import { ShareFormStyle } from "./shareForm.style";


const ShareForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();

  return (
   <ShareFormStyle>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <br />

            <h4>Track an item</h4>
          </label>

          <Input
            name="barcode"
            control={control}
            placeholder="Enter tracing numberd here"
          />
          <div className="wrapperButton">
            <Button name="tarck" htmlType="submit" control={control}>
              Track
            </Button>
          </div>
        </form>
      </section>
   </ShareFormStyle>
  );
};

export default ShareForm;
