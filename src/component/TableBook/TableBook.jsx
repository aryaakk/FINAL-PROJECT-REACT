import React, { useEffect, useState } from "react";
import "./../../assets/style.css";
import { Table } from "antd";
import axios from "axios";
import ModalDelete from "../ModalAction/ModalDelete/ModalDelete";
import ModalUpdate from "../ModalAction/ModalUpdate/ModalUpdate";
import ModalAdd from "../ModalAction/ModalAdd/ModalAdd";

const TableBook = () => {
  //getBBookDataF
  const [bookData, setBookData] = useState(null);
  async function getBooksFetch() {
    try {
      const response = await axios.get("http://localhost:3000/books");
      if (response.status == 200) {
        setBookData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooksFetch();
  }, []);

  //tableData
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Title Book",
      dataIndex: "title",
    },
    {
      title: "Genre Book",
      dataIndex: "genre",
    },
    {
      title: "Author Book",
      dataIndex: "author",
    },
    {
      title: "Description Book",
      dataIndex: "desc",
      render: (text) => <p>{text.substring(0, 80)}...</p>,
    },
    {
      title: "Actions",
      dataIndex: "id",
      width: 20,
      render: (_, action) => (
        <div className="action" key={action.id}>
          <ModalDelete actionDel={action} />
          <ModalUpdate actionUpdt={action}/>
        </div>
      ),
    },
  ];

    return (
    <>
      <div className="wrapTableBooks">
        <div className="header">
          <div className="text">
            <span>Master Data Book</span>
          </div>
          <div className="actionAdd">
            <ModalAdd/>
          </div>
        </div>
        <hr className="rowBooks" />
        <div className="contentTable">
          <Table className="table" columns={columns} dataSource={bookData} />
        </div>
      </div>
    </>
  );
};
export default TableBook;
