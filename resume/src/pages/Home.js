import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import tamplateimg from "../resources/templates/template1.png";
import tamplate2img from "../resources/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const template = [
    {
      title: "Simple Resume",
      image: tamplateimg,
    },
    {
      title: "Highlighted Section Resume",
      image: tamplate2img,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {template.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img src={template.image } height="400" width="100%" alt="" />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={()=>navigate(`/templates/${index+1}`)}>TRY</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;
