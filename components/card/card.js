import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./card.module.css";

const cardData = [
  {
    id: 1,
    title: "FREE PLAN",
    price: 0,
  },
  {
    id: 2,
    title: "PLUS PLAN",
    price: 5,
  },
  {
    id: 3,
    title: "PRO PLAN",
    price: 15,
  },
  {
    id: 4,
    title: "ENTERPRISE PLAN",
    price: 15,
  },
];

const Card = () => {
  return (
    <div className={`${styles.selectPlan}`}>
      <h2 className="fs-25 textColor text-center fw-bold">
        SELECT A PLAN
      </h2>
      {/* card start */}

      <div className="d-flex flex-md-row flex-column mt-5 px-md-0 px-5">
        {cardData.map((data) => (
          <div
            key={data.id}
            className={`${styles.cardStyle} ${styles.cardHover} ${
              data.id === 4 ? `${styles.fourthCard}` : " "
            }`}
          >
            <p
              className={`${
                data.id === 4 ? `${styles.title}` : "text-primary "
              } text-center mt-5 fs-20 fw-bold  lh-12`}
            >
              {data.title}
            </p>
            <div className="text-center mt-4">
              <div className="mt-5 py-3">
                <p className="d-inline pt-5 fs-55 lh-12">
                  <sup className="fs-20 lh-12">$</sup>
                  <b>{data.price}</b>
                </p>
                <span className="fs-24 fw-bold">.00</span>
              </div>
              <p className="fs-14 lh-12">per month</p>
              <p className="fs-14 lh-12">BILLED YEARLY</p>
            </div>
            <div className="px-2 py-3 mt-5">
              <p className="fs-14">
                <FiArrowRightCircle className="me-2" />3 days dynamic or QR
                codes
              </p>
              
              <p className="fs-14">
                <FiArrowRightCircle className="me-2 lh-12" />
                20,000 anual scans
              </p>

              <p className="fs-14">
                <FiArrowRightCircle className="me-2 lh-12" />
                Scan tracking
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className={`px-4 mb-4 ${
                  data.id === 4 ? `btn btn-light` : `btn ${styles.btnNow}`
                }`}
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
