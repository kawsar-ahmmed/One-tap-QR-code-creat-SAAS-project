import React from "react";
import Navbar from "../components/navbar/navbar";
import RightSideBar from "../components/rightSideBar/rightSideBar";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/createPage.module.css";
import { creatProject } from "../utilites/createProject";

const CreatePage = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />

          <div className="row mt-5 pe-5">
            <div className="col-md-8 ">
              <div className="bg-project p-5">
                <h6 className="fw-bold fs-18 lh-12 ">CREATE PROJECT</h6>
                <div className={`row mt-3`}>
                  {creatProject.map((data) => (
                    <div
                      key={data.id}
                      className={`${styles.card} col-md-3 bg-white m-3 d-flex justify-content-center align-items-center`}
                      style={{ height: "100px" }}
                    >
                      <small className="fs-14 ">{data.name}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
