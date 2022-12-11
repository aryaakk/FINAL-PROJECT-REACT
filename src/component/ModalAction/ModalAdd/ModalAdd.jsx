// import React, { useState } from "react";
// import { Modal, Button } from "antd";

// import "./../../../assets/style.css";
// const { confirm } = Modal;

// const ModalAdd = () => {
//   const ShowModalAdd = async () => {
//     confirm({
//       title: (
//         <div className="titleAdd">
//             <span>Form Add Book</span>
//         </div>
//       ),
//       icon: (
//         <div className="iconAdd">
//           <i className="fa-solid fa-book-medical"></i>
//         </div>
//       ),
//       content: (
//         <div className="formAdd">

//         </div>
//       ),
//       onOk() {
//         return new Promise((resolve, reject) => {
//           setTimeout(Math.random() > 0.5 ? resolve : reject, 2000);
//         }).catch(() => console.log("Oops errors!"));
//       },
//       onCancel() {},
//     });
//   };
//   return (
//     <>
//       <Button className="buttAdd" onClick={ShowModalAdd}>
//         Add Books <i class="fa-solid fa-circle-plus"></i>
//       </Button>
//     </>
//   );
// };

// export default ModalAdd;
import React, { useState } from "react";
import { Modal, notification, Button } from "antd";
import FormAdd from "../../FormAdd/FormAdd";
import { postBook } from "../../../services/AppServiceBooks";
import "./../../../assets/style.css";

const ModalAdd = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const ShowModalAdd = () => {
    setOpen(true);
  };
  const onSubmit = (e) => {
    setConfirmLoading(true);
    console.log(e);
    setTimeout(() => {
      postBook(e);
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
        Add Books <i class="fa-solid fa-circle-plus"></i>
      </Button>
      <Modal
        centered
        title={
          <>
            <div className="titleAdd">
              <i className="fa-solid fa-book-medical"></i>
              <span>Form Add Book</span>
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
              type="add"
              submitName="Add Books"
            />
          </div>
        </>
      </Modal>
    </>
  );
};
export default ModalAdd;
