import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
function Register() {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setloading(true);
    try {
      await axios.post("api/user/register", values);
      setloading(false);
      message.success("Registration Sucessfull");
    } catch (error) {
      setloading(false);

      message.error("Registration Failed");
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
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item name="cpassword" label="Conform password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-item-center justify-content-between">
          <Link to="/login">Click Here To Login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
