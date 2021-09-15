import Image from "next/image";
import { GoPlus } from "react-icons/go";
import Navbar from "../components/navbar/navbar";
import QrCard from "../components/qrCard/qrCard";
import Sidebar from "../components/sidebar/sidebar";
import QRCode from "../utilites/images/001-qr-code.svg";

//

const CreateTemplate = ({ qrCodes }) => {
  const idCollection = qrCodes.map((qr) => qr._id);
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          <div className="bg-white  mt-5 me-5 ms-1 pb-3">
            <div
              className={`d-flex justify-content-between align-items-center px-5 pt-4`}
            >
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={QRCode} height="20" width="20" alt="qrCode" />
                </div>
                <div>
                  <h6 className="fs-16 fontSemiBold lh-26 textColor">
                    QR Codes (1)
                  </h6>
                </div>
              </div>

              <h6
                onClick={() => router.push("/qr-codes")}
                className={`text-center cursor-poiter px-3 paddingY lh-24 fs-14 bgBlue text-white lh-12 rounded-3`}
              >
                <GoPlus className="me-2" />
                CREATE QR CODE{" "}
              </h6>
            </div>
            <hr />
            {qrCodes.map((qrcode) => (
              <QrCard
                key={qrcode._id}
                qrcode={qrcode}
                idCollection={idCollection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/qrcode");
  const qrCodesData = await res.json();

  const qrCodes = qrCodesData.qrCodeData;

  return {
    props: {
      qrCodes,
    },
  };
}
