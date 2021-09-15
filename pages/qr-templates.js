import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import styles from "../styles/qrCodeTemplate.module.css";
import qr from "../utilites/images/001-qr-code -black.svg";
import logo from "../utilites/images/001-water-drop.svg";

const QrCodeTemplate = () => {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState(null);
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          {/* =========== */}

          <div
            className={`${styles.card} mt-5 mb-5 pt-4 px-5 me-5 ms-1  boxShadow  bg-body rounded shadow-sm`}
          >
            <div className="d-flex align-items-center">
              <div>
                <Image src={logo} alt="logo" />
              </div>
              <div>
                <h6
                  className="ms-4 fw-bold fs-22 lh-26"
                  style={{ color: "#004CD4" }}
                >
                  QR code templates (3)
                </h6>
              </div>
            </div>
            <div className="d-flex my-4">
              <div className="p-2 text-center">
                <Image src={qr} height="80" width="80" alt="logo" />
                <Link href="/createTemplate">
                  <a>
                    <p className="mt-3 px-3 py-2 fs-16 lh-12 fw-bold border">
                      Default template
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${styles.card} pt-4 px-5 py-5 me-5 ms-1 boxShadow  bg-body rounded shadow-sm`}
          >
            <div className="d-flex justify-content-between pb-5">
              <div className="d-flex align-items-center pb-5">
                <div>
                  <Image src={logo} alt="logo" />
                </div>
                <div>
                  <h6
                    className="ms-4 fw-bold fs-22 lh-26"
                    style={{ color: "#004CD4" }}
                  >
                    Landing Page (3)
                  </h6>
                </div>
              </div>
              <div>
                <h6
                  className="text-white fw-bold px-3 py-2 rounded fs-16 lh-12"
                  style={{ backgroundColor: "#004CD4" }}
                >
                  <GoPlus className="me-2" style={{ fontSize: "25px" }} />{" "}
                  CREATE LANDING PAGE
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodeTemplate;
