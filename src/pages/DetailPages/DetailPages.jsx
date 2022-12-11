import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./../../assets/style.css";

const DetailPages = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState("");

  async function GetDetail() {
    try {
      const response = await axios.get(`http://localhost:3000/books/${id}`);
      if (response.status == 200) {
        setDetail(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetDetail();
  }, []);

  return (
    <>
      <div className="wrapperDetail">
        <div className="contentDetail">
          <div className="headerDetail">
            <Link to="/">
              <i class="fa-solid fa-arrow-left-long"></i>
            </Link>
          </div>
          <div className="content">
            <div className="contentValue">
              <div className="title">
                <span>{detail.title}</span>
              </div>
            </div>
            <div className="ContentImg">
              <img src={detail.cover} alt="" />
            </div>
            <div className="contentBody">
              <div className="desc">
                <h3>Description</h3>
                <p>{detail.desc}</p>
              </div>
              <div className="ket">
                <h3>Authors</h3>
                <span>{detail.author}</span>
                <h3>Genre</h3>
                <span>{detail.genre}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPages;
