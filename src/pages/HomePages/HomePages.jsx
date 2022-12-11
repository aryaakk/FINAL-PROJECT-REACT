import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../assets/style.css";

const HomePages = () => {
  const [book, setBooks] = useState(null);
  const [page, setPages] = useState(1);

  async function getBooksData(pagin) {
    try {
      const response = await axios.get(
        `http://localhost:3000/books?_page=${pagin}&_limit=3`
      );
      if (response.status == 200) {
        setBooks(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooksData(page);
  }, [page]);
  console.log(book);

  const navigate = useNavigate();
  function ShowMoreFunc(id) {
    navigate(`/detailPages/${id}`);
  }

  // const paginate = 1;
  const renderPrev = () => {
    setPages((pageState) => pageState - 1);
  };

  const renderNext = () => {
    setPages((pageState) => pageState + 1);
  };

  return (
    <>
      <div className="wrapBook">
        <div className="header">
          <span>Books Storee</span>
        </div>
        <hr className="rowBook" />
        <div className="contentBook">
          {book?.map((books, index) => (
            <div className="listBook" key={index}>
              <div className="img">
                <img src={books.cover} alt="" />
              </div>
              <div className="content">
                <h2>{books.title}</h2>
                <span>{books.desc.substring(0, 80)}...</span>
                <button onClick={() => ShowMoreFunc(books.id)}>
                  Show More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <div className="prev">
            {page == 1 ? (
              <button disabled onClick={renderPrev}>
                prev
              </button>
            ) : (
              <button onClick={renderPrev}>prev</button>
            )}
            {console.log(page)}
          </div>
          <div className="next">
            <button onClick={renderNext}>next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
