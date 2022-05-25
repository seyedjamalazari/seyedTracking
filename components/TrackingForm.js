import React from "react";
import { useForm } from "react-hook-form";
import Button from "./DataEntry/Button";
import Input from "./DataEntry/Input";

const TrackingForm = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <h4>TrackAnItem</h4>
          </label>
          <Input name="barcode" control={control} />
        </div>
        <div>
          <Button name="tarck" htmlType="submit" control={control}>
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default TrackingForm;
