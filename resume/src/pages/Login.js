import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../resources/authentication.css";
function Register() {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setloading(true);
    try {
      const user = await axios.post("api/user/login", values);
      message.success("Login Sucessfull");
      localStorage.setItem("buildResume-user", JSON.stringify(user.data));
      setloading(false);
      navigate("/home");
    } catch (error) {
      setloading(false);
      message.error("Login Failed");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("buildResume-user")) {
      navigate("/home");
    }
  });
  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-item-center justify-content-between">
          <Link to="/register">Click Here To Register</Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
