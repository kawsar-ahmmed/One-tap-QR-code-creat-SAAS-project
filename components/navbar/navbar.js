import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import user from "../../utilites/PewDiePie-Facebook.png";

const Navbar = () => {
  return (
    <div className="mt-5 mb-3 position-sticky top-0 zIndex-1000 bgGray w-100 p-2 bottomBoxShadow">
      <div className="row d-flex align-items-center ">
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <h6 className="me-4 fw-bold fs-20 lh-26">Hello Kamon</h6>
            <button className="d-flex align-items-center justify-content-center px-3 py-2 rounded-3 text-warning border-0 bg-white">
              {" "}
              <BsStarFill className="me-2" />
              PREMIUM
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center mt-1">
            <span>
              <button className="px-3 py-2 me-3 bgBlue text-white border-0 rounded-3">
                Invite A Friend
              </button>
            </span>

            <span>
              <Image
                src={user}
                height="45"
                width="45"
                className="rounded-circle"
                alt="user"
              />
            </span>
            <span>
              <h6 className="ms-2 fs-20 lh-26 fw-bold">Kamon Ahmed</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
