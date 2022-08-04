import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Form, message, Spin, Tabs } from "antd";
import Personalinfo from "../components/Personalinfo";
import SkillsEducation from "../components/SkillsEducation";
import ExperianceProject from "../components/ExperianceProject";
import axios from "axios";

const { TabPane } = Tabs;
function Profile() {
  const [loading, setloading] = useState(false);
  const user = JSON.parse(localStorage.getItem("buildResume-user"));
  const onFinish = async (values) => {
    setloading(true);
    try {
      const result = await axios.post("api/user/update", {
        ...values,
        _id: user._id,
      });
      localStorage.setItem("buildResume-user", JSON.stringify(result.data));
      setloading(false);
      message.success("Profile Updated Sucessfully");
    } catch (error) {
      setloading(false);

      message.error("Registration Failed");
    }
  };
  return (
    <DefaultLayout>
      {loading && <Spin size="large" />}
      <div className="update-profile">
        <h4><b>Update Profile</b></h4>
        <hr/>
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <Personalinfo />
            </TabPane>
            <TabPane tab="Skills And Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experiance/Projects" key="3">
              <ExperianceProject />
            </TabPane>
          </Tabs>
          <Button htmlType="submit">Update</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}

export default Profile;
