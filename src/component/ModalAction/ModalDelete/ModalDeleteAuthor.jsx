import React, { useState } from "react";
import { Modal, notification } from "antd";
import { deleteData } from "../../../services/AppServiceAuthors";

import "./../../../assets/style.css";
const { confirm } = Modal;

const ModalDeleteAuthor = ({ actionDel }) => {
  const [id, setId] = useState(actionDel.id);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const showModalDelete = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      deleteData(id);
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <i class="fa-solid fa-trash butt delete" onClick={showModalDelete}></i>
      <Modal
        centered
        title={
          <>
            <div className="titleDelete">
              <i class="fa-solid fa-circle-exclamation"></i>
              <span>Are You Sure Delete This Author??</span>
            </div>
          </>
        }
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <>
          <div className="modalDelete">
            <div className="header">
              <span>{actionDel.value}</span>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};
export default ModalDeleteAuthor;
