import { Button, Dropdown, Menu } from "antd";
import React from "react";
import "./../resources/defaultlayout.css";
import { useNavigate, Link } from "react-router-dom";
import { UserOutlined  } from "@ant-design/icons";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("buildResume-user"));
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/home">Home</Link>,
        },
        {
          label: <Link to="/profile">Profile</Link>,
        },
        {
          key: "3",
          label: (
            <span
              onClick={() => {
                localStorage.removeItem("buildResume-user");
                navigate("/login");
              }}
            >
              Logout
            </span>
          ),
        },
      ]}
    />
  );

  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={()=> navigate("/home")} style={{cursor : "pointer"}}>Build CV</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button icon ={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{overflow :"scroll"}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
