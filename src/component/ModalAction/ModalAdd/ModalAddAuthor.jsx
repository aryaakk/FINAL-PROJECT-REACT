import React, { useState } from "react";
import { Modal, notification, Button } from "antd";
import FormAddAutor from "../../FormAdd/FormAddAuthor";
import { postAuthor } from "../../../services/AppServiceAuthors";
import "./../../../assets/style.css";
import FormAddAuthor from "../../FormAdd/FormAddAuthor";

const ModalAddAuthor = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const ShowModalAdd = () => {
    setOpen(true);
  };
  const onSubmit = (e) => {
    setConfirmLoading(true);
    console.log(e);
    setTimeout(() => {
      postAuthor(e);
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button className="buttAdd" onClick={ShowModalAdd}>
        Add Author <i class="fa-solid fa-circle-plus"></i>
      </Button>
      <Modal
        centered
        title={
          <>
            <div className="titleAdd">
              <i className="fa-solid fa-book-medical"></i>
              <span>Form Add Author</span>
              <i className="fa-solid fa-book-medical"></i>
            </div>
          </>
        }
        open={open}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <>
          <div className="formAdd">
            <FormAddAuthor
              action={(e) => {
                onSubmit(e);
              }}
              type="add"
              submitName="Add Books"
            />
          </div>
        </>
      </Modal>
    </>
  );
};
export default ModalAddAuthor;
