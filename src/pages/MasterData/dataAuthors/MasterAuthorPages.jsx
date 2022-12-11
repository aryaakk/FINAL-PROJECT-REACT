import React, { useEffect, useState } from "react";
import "./../../../assets/style.css";
import { Space, Table, Tag } from "antd";
import axios from "axios";

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
    dataIndex: "",
  },
];

const MasterAuthors = () => {
  const [authorsData, setAuthorsData] = useState(null);
  async function getAuthorsFetch() {
    try {
      const response = await axios.get("http://localhost:3000/author");
      if (response.status == 200) {
        setAuthorsData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAuthorsFetch();
  }, []);

  return (
    <div className="wrapTableBooks">
      <Table columns={columns} dataSource={authorsData} />
    </div>
  );
};
export default MasterAuthors;
