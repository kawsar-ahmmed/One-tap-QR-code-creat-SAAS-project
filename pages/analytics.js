import React from 'react';
import { Bar } from 'react-chartjs-2';
import { IoMdArrowDropdown } from 'react-icons/io';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import styles from '../styles/analytics.module.css';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '',
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: 'rgb(75, 192, 192)',
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

const Analytics = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9 vh-100 scroll ">
          <Navbar />
          <div className="mt-5">
            <div className="row">
              <div className="col-md-6 pe-4">
                <div className={`${styles.card} p-4`}>
                  <button className={`${styles.btn} px-3 py-1`} type="">
                    Last 7 days{' '}
                    <IoMdArrowDropdown
                      style={{ color: 'white', fontSize: '20px' }}
                    />
                  </button>
                  <p className="mt-3">Top performing</p>
                  <div className={`${styles.chart}`}>
                    <Bar data={data} options={options} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 pe-4">
                <div className={`${styles.card} p-4`}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6>kamon</h6>
                    </div>
                    <div>
                      <button className={`${styles.btn} px-3 py-1`} type="">
                        Last 7 days{' '}
                        <IoMdArrowDropdown
                          style={{ color: 'white', fontSize: '20px' }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <p>no data here to show</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================================= */}
            <div className="row mt-5 mb-5">
              <div className="col-md-7 pe-4">
                <div className={`${styles.cardBottom} p-4`}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h6>Total project clicks</h6>
                    </div>
                    <div>
                      <button className={`${styles.btn} px-3 py-1`} type="">
                        Last 7 days{' '}
                        <IoMdArrowDropdown
                          style={{ color: 'white', fontSize: '20px' }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className={`${styles.chart} mt-4 mb-1`}>
                    <Bar data={data} options={options} />
                  </div>
                </div>
              </div>
              <div className="col-md-5 pe-4">
                <div className={`${styles.cardBottom} p-4`}>
                  <div className="">
                    <h6>Scans by location</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <p>no data here to show</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
