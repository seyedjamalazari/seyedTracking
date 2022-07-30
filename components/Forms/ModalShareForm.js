import { Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Space } from "antd";
import Input from "../DataEntry/Input";
import Button from "../DataEntry/Button";
import { ShareAltOutlined } from "@ant-design/icons";
import CopyClipBord from "../Copy/CopyClipboard";
import { ModalSahreFormStyle } from "./ModalShareFormStyle";

const isValidEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const ModalShareForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const [isCopySectionVisible, setCopySectionVisible] = useState(true);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: "emails",
    });

  useEffect(() => {
    console.log("append for the first time");
    append();
  }, []);

  const handleCancel = () => {
    reset({ fields: [] });
    setCopySectionVisible(!isCopySectionVisible);
    setIsModalVisible(false);
  };

  const urlpost =
    " http://192.168.100.184:3031/api/v1/customer/trackings/tracking_url_email";

  const onSubmit = (data) => {
    const { emails } = data;

    axios.post(urlpost, {
      email: emails,
    });
    // .then(({emails}) => {
    //   setEmaildata({ emails });
    // }).catch((error)=>{
    //   setEmaildata({error});
    // });
    console.log("email", emails);
  };

  const mail = () =>
    fields.length < 3 && (
      <Button className="wrpperAddNew"
        htmlType="button"
        onClick={() => append()}
        control={control}
        name="addnew"
      >
        +Add new
      </Button>
    );

  return (
    <ModalSahreFormStyle>
      <Button
        htmlType="submit"
        name="submit"
        control={control}
        onClick={showModal}
      >
        <Space>
          <ShareAltOutlined />
        </Space>
        Share
      </Button>
      <div className="modalwrapper" style={{ backgroundColor: "red" }}>
        <Modal
          title=""
          visible={isModalVisible}
          // onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose
          footer={null}
        >
          <h3 className="Sharelinkviamodal">Share link via</h3>
          <Button
            className="wrapperEmail"
            onClick={() => setCopySectionVisible(!isCopySectionVisible)}
            control={control}
            name="email/copy"
          >
            @E-mail
          </Button>

          <div style={{ display: !isCopySectionVisible ? "block" : "none" }}>
            {mail()}
            <form onSubmit={handleSubmit(onSubmit)}>
              <ul className="modalul">
                {fields.map((item, index) => (
                  <li key={item.id}>
                    <Input
                    className="inputmodal"
                      control={control}
                      errors={errors}
                      name={`emails[${index}]`}
                      placeholder="example@email,com"
                      register={register(`emails[${index}]`, {
                        required: "This is required email",
                        validate: {
                          email: (value) =>
                            isValidEmail(value) ? true : "Invalid Email",
                        },
                      })}
                    />
                  </li>
                ))}
                <Button className="wrapperSubmit" htmlType="submit" control={control} name="submit">
                  Submit
                </Button>
              </ul>
            </form>
          </div>

          <h3>OR</h3>
          <CopyClipBord />
        </Modal>
      </div>
    </ModalSahreFormStyle>
  );
};

export default ModalShareForm;
