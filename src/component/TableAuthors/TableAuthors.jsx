import React, { useEffect, useState } from "react";
import "./../../assets/style.css";
import { Table } from "antd";
import axios from "axios";
import ModalDeleteAuthor from "../ModalAction/ModalDelete/ModalDeleteAuthor";
import ModalUpdate from "../ModalAction/ModalUpdate/ModalUpdate";
import ModalAdd from "../ModalAction/ModalAdd/ModalAdd";
import ModalAddAuthor from "../ModalAction/ModalAdd/ModalAddAuthor";

const TableAuthor = () => {
  //getBBookDataF
  const [author, setAuthor] = useState(null);
  async function getAuthorFetch() {
    try {
      const response = await axios.get("http://localhost:3000/author");
      if (response.status == 200) {
        setAuthor(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAuthorFetch();
  }, []);

  //tableData
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Value Author",
      dataIndex: "value",
    },
    {
      title: "Label Author",
      dataIndex: "label",
    },
    {
      title: "Biografi Author",
      dataIndex: "biografi",
      render: (text) => <p>{text.substring(0, 80)}...</p>,
    },
    {
      title: "Actions",
      dataIndex: "id",
      width: 20,
      render: (_, action) => (
        <div className="action" key={action.id}>
          <ModalDeleteAuthor actionDel={action} />
          <ModalUpdate actionUpdt={action} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="wrapTableBooks">
        <div className="header">
          <div className="text">
            <span>Master Author Book</span>
          </div>
          <div className="actionAdd">
            <ModalAddAuthor />
          </div>
        </div>
        <hr className="rowBooks" />
        <div className="contentTable">
          <Table className="table" columns={columns} dataSource={author} />
        </div>
      </div>
    </>
  );
};
export default TableAuthor;
