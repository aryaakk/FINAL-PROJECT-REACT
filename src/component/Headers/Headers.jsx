import React from "react";
import { Dropdown, Space } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./../../assets/img/favbook.png";
const items = [
  {
    key: "1",
    label: <Link to="/DataBook">DataBook</Link>,
  },
  {
    key: "2",
    label: <Link to="/DataAuthors">DataAuthors</Link>,
  },
  {
    key: "3",
    label: <Link to="/DataGenre">DataGenre</Link>,
  },
];
const Headers = () => {
  const navigate = useNavigate();
  const RenderPage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="wrapHeaders">
        <div className="navBrand" onClick={RenderPage}>
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="title">
            <span>
              RDG <b>BOOKS</b>
            </span>
          </div>
        </div>
        <div className="NavItem">
          <NavLink className="item" to="/">
            Home
          </NavLink>
          <Dropdown
            menu={{
              items,
            }}
          >
            <div className="item">
              <Space>
                <p>Data Master</p>
                <i class="fa-sharp fa-solid fa-caret-down"></i>
              </Space>
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  );
};
export default Headers;
