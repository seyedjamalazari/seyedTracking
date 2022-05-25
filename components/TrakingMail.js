import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "./DataEntry/Button";
import Input from "./DataEntry/Input";

const TrakingMail = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm();

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              <h4>TrackAnItem</h4>
            </label>
            <Input name="seyed" control={control} />
          </div>
          <div>
            <Button name="tarck" htmlType="submit" control={control}>
              Submit
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TrakingMail;
