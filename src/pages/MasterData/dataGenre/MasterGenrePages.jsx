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
    title: "Genre Book",
    dataIndex: "genre",
  },
  {
    title: "Actions",
    dataIndex: "",
  },
];

const MasterGenre = () => {
  const [genreBook, setgenreBook] = useState(null);

  async function getGenreFetch() {
    try {
      const response = await axios.get("http://localhost:3000/genre");
      if (response.status == 200) {
        setgenreBook(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGenreFetch();
  }, []);

  return (
    <div className="wrapTableBooks">
      <Table columns={columns} dataSource={genreBook} />
    </div>
  );
};
export default MasterGenre;
