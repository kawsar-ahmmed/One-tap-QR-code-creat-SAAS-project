import React from "react";
import { Bar } from "react-chartjs-2";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

// const array = [
//   { id: 1, title: "Projects", total: "0" },
//   { id: 2, title: "QR Codes", total: "0" },
//   { id: 3, title: "NFC", total: "0" },
//   { id: 4, title: "Most Popular", list: "No project to Show" },
// ];

const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "NFC",
      data: [12, 19, 3, 5, 2, 3, 15],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "QR code",
      data: [2, 3, 7, 11, 1, 4, 10],
      backgroundColor: "rgb(54, 162, 235)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const Overview = () => {
  return (
    <div className="container vh-100">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll">
          <Navbar />
          <div className="row my-5 mx-2">
            {/* project card  */}
            <div className="col-md-3">
              <div className="py-4 px-2 rounded-3 text-white bg-pink cardHeight">
                <h6 className="fontMedium mb-5 fs-20 lh-26 text-center">
                  Projects
                </h6>
                <p className="m-0">Total Projects - 0</p>
              </div>
            </div>
            {/* project card end */}
            {/* qr card  */}
            <div className="col-md-3">
              <div className="py-4 px-2 rounded-3 text-white bg-light-blue cardHeight">
                <h6 className="fontMedium mb-5 text-center fs-20 lh-26">
                  QR Codes
                </h6>
                <p className="m-0">Total QR codes - 0</p>
                <p>Total QR scans - 0</p>
              </div>
            </div>
            {/* qr card end */}
            {/* nfc card  */}
            <div className="col-md-3">
              <div className="py-4 px-2 rounded-3 text-white bg-pink cardHeight">
                <h6 className="fontMedium text-center mb-5 fs-20 lh-26">
                  NFC{" "}
                </h6>
                <p className="m-0">Total NFC - 0</p>
                <p>Total NFC scans - 0</p>
              </div>
            </div>
            {/* nfc card end */}
            {/* top project card  */}
            <div className="col-md-3">
              <div className="py-4 px-2 rounded-3 text-white bg-light-blue cardHeight">
                <h6 className="fontMedium mb-5 fs-20 text-center lh-26">
                  Projects
                </h6>
                <p className="m-0">Projects-1</p>
                <p className="m-0">Projects-2</p>
                <p className="m-0">Projects-3</p>
              </div>
            </div>
            {/* top project card end */}
          </div>
          <div className="mx-3 my-5">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
