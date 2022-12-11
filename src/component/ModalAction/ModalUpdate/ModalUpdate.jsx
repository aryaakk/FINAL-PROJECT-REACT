import React, { useEffect, useState } from "react";
import { Modal, notification } from "antd";
import "./../../../assets/style.css";
import FormAdd from "../../FormAdd/FormAdd";
import { patchBooks } from "../../../services/AppServiceBooks";
import axios from "axios";
const { confirm } = Modal;

const ModalUpdate = ({ actionUpdt }) => {
  const [id, setId] = useState(actionUpdt.id);
  const [patchBook, setPatchBook] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  async function getPatchBook() {
    try {
      const response = await axios.get(`http://localhost:3000/books/${id}`);
      setPatchBook(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPatchBook();
  }, []);

  const showModalUpdate = () => {
    setOpen(true);
    console.log();
  };
  const onSubmit = (e) => {
    setConfirmLoading(true);
    console.log(e);
    setTimeout(() => {
      patchBooks(e);
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
      <i
        class="fa-solid fa-pen-to-square butt update"
        onClick={showModalUpdate}
      ></i>
      <Modal
        centered
        title={
          <>
            <div className="titleAdd">
              <i className="fa-solid fa-book-medical"></i>
              <span>Form Patch Book</span>
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
            <FormAdd
              action={(e) => {
                onSubmit(e);
              }}
              type="update"
              setPatch={patchBook}
              submitName="Patch Books"
            />
          </div>
        </>
      </Modal>
    </>
  );
};
export default ModalUpdate;
