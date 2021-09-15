import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import { projectData } from "../utilites/projectData";

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 scroll vh-100">
          <Navbar />
          <div className="my-5 mx-2">
            {/* ==================== */}
            <div className="row">
              <div className="col-md-6 position-relative">
                <input
                  className={`projectInput form-control`}
                  type="text"
                  placeholder="Search"
                  name="enter your project name"
                />
                <AiOutlineSearch className="searchIcon" size="24" />
              </div>
              <div className="col-md-6 d-flex justify-content-between">
                <button className="ms-5 project-btn px-4 fs-18 lh-12 py-3">
                  Filter
                </button>
                <button className="project-btn fs-18 lh-12 py-3 px-4">
                  Last 7 days
                </button>
              </div>
            </div>
            {/* ==================== */}

            <div className="px-2 py-5">
              <h6 className="fs-18 lh-12 fw-bold">ALL PROJECTS</h6>
              <div className="row">
                {projectData.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-3  mt-4 projectCardItems"
                  >
                    <a href={item.link}>
                      <div className=" text-center projectCardItem boxShadow rounded-3">
                        <span
                          className="color-text"
                          style={{ fontSize: "50px" }}
                        >
                          {item.icon}
                        </span>

                        <p>{item.tittle}</p>
                      </div>
                      <div
                        className=" mt-3 d-flex justify-content-center "
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        <p className="me-3">{item.detail}</p>
                        <p>{item.date}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
